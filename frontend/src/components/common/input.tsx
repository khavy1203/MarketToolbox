import React from 'react';

interface InputProps {
    value: string; // Giá trị của ô nhập liệu
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Hàm xử lý khi giá trị thay đổi
    placeholder?: string; // Văn bản gợi ý trong ô nhập liệu
    type?: string; // Loại của ô nhập liệu (text, password, email, etc.)
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder = '', type = 'text' }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="input"
        />
    );
};

export default Input;
