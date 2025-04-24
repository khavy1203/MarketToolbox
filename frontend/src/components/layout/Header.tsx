import React from 'react';
import styles from '../../styles/Header.module.css';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.burgerBtn} onClick={onToggleSidebar}>
        <i className="bi bi-justify fs-3" />
      </a>
    </header>
  );
};

export default Header;