import React from 'react';

interface NavbarProps {
    links: { label: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return (
        <nav className="navbar">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
