// Định nghĩa kiểu dữ liệu cho người dùng
export interface User {
    id: number; // ID của người dùng
    name: string; // Tên của người dùng
    email: string; // Email của người dùng
    age?: number; // Tuổi của người dùng (tùy chọn)
    isActive: boolean; // Trạng thái hoạt động của người dùng
}
