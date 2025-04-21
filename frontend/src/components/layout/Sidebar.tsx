import React from 'react';

interface SidebarProps {
    items: { label: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    return (
        <aside className="sidebar">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;

