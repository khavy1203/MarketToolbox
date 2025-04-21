import React from 'react';

interface CheckboxProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
    return (
        <label className="checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} />
            {label}
        </label>
    );
};

export default Checkbox;
