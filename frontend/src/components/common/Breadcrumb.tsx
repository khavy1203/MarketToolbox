import React from 'react';

interface BreadcrumbProps {
    items: { label: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="breadcrumb">
            {items.map((item, index) => (
                <span key={index}>
                    <a href={item.href}>{item.label}</a>
                    {index < items.length - 1 && ' / '}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
