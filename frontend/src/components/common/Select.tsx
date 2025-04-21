import React from 'react';

interface SelectProps {
    options: { value: string; label: string }[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, value }) => {
    return (
        <select value={value} onChange={onChange} className="select">
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
