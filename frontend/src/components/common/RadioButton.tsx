import React from 'react';

interface RadioButtonProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    name: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, onChange, label, name }) => {
    return (
        <label className="radio-button">
            <input type="radio" checked={checked} onChange={onChange} name={name} />
            {label}
        </label>
    );
};

export default RadioButton;
