import React from 'react';
import styles from '../../styles/StatsCard.module.css';

interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.row}>
          <div className={styles.iconWrapper}>
            <div className={`${styles.statsIcon} ${styles[color]}`}>
              <i className={icon} />
            </div>
          </div>
          <div className={styles.content}>
            <h6 className={styles.title}>{title}</h6>
            <h6 className={styles.value}>{value}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;