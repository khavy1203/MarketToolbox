import React from 'react';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    return (
        <div className="tooltip">
            {children}
            <span className="tooltip-text">{text}</span>
        </div>
    );
};

export default Tooltip;

