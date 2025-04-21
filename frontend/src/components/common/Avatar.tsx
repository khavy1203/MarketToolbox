import React from 'react';

interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 50 }) => {
    return <img src={src} alt={alt} className="avatar" style={{ width: size, height: size }} />;
};

export default Avatar;
