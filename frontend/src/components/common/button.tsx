import React from 'react';

interface ButtonProps {
    label: string; // Nhãn của nút
    onClick: () => void; // Hàm xử lý khi nút được nhấn
    disabled?: boolean; // Trạng thái vô hiệu hóa của nút
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
    return (
        <button onClick={onClick} disabled={disabled} className="button">
            {label}
        </button>
    );
};

export default Button;
