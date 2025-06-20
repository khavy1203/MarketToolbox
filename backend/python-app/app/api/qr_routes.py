from fastapi import APIRouter, File, UploadFile
from fastapi.responses import JSONResponse
import numpy as np
from pyzbar.pyzbar import decode
import cv2
from PIL import Image, ImageEnhance

router = APIRouter()

@router.post("/qr/detect-pyzbar")
async def detect_qr(file: UploadFile = File(...)):
    try:
       # Đọc nội dung file
        contents = await file.read()

        # Đọc hình ảnh từ nội dung file
        img_array = np.frombuffer(contents, np.uint8)
        img_cv2 = cv2.imdecode(img_array, cv2.IMREAD_COLOR)

        if img_cv2 is None:
            raise ValueError("Uploaded file is not a valid image")

        # Chuyển đổi ảnh sang dạng PIL để tăng cường
        img_pil = Image.fromarray(cv2.cvtColor(img_cv2, cv2.COLOR_BGR2RGB))

        # Tiền xử lý: Tăng độ sáng và độ tương phản
        enhancer_brightness = ImageEnhance.Brightness(img_pil)
        img_pil = enhancer_brightness.enhance(1.8)  # Tăng độ sáng

        enhancer_contrast = ImageEnhance.Contrast(img_pil)
        img_pil = enhancer_contrast.enhance(2.5)  # Tăng độ tương phản

        # Chuyển đổi lại sang OpenCV (RGB → BGR)
        img_cv2_processed = cv2.cvtColor(np.array(img_pil), cv2.COLOR_RGB2BGR)

        # Chuyển đổi ảnh sang Grayscale để giảm nhiễu màu sắc
        img_gray = cv2.cvtColor(img_cv2_processed, cv2.COLOR_BGR2GRAY)

        # Dùng Adaptive Histogram Equalization (CLAHE) để cân bằng độ sáng toàn cục và cục bộ
        clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))

        img_clahe = clahe.apply(img_gray)

        # Thêm Gaussian Blur để làm mềm nhiễu
        img_blurred = cv2.GaussianBlur(img_clahe, (3, 3), 0)

        # Dùng thêm thresholding để làm rõ QR Code
        _, img_thresh = cv2.threshold(img_blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        # Phát hiện QR Code bằng pyzbar

        decoded_objects = decode(img_thresh)

        if decoded_objects:
            results = []
            for obj in decoded_objects:
                results.append({
                    "data": obj.data.decode("utf-8"),
                    "type": obj.type,
                })
            return {"success": True, "decodedText": results}
        else:
            return {"message": "No QR Code detected", "success": False}

    except Exception as e:
        return JSONResponse(status_code=500, content={"message": str(e)})
    
