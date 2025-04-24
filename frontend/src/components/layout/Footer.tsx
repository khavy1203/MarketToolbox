import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>2021 © Mazer</p>
        </div>
        <div className={styles.right}>
          <p>
            Crafted with <span className={styles.heart}><i className="bi bi-heart" /></span> by{' '}
            <a href="http://ahmadsaugi.com" target="_blank">
              A. Saugi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;