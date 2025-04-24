import React from 'react';
import styles from '../../styles/UserProfile.module.css';

const UserProfile: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.profile}>
          <div className={`${styles.avatar} avatar-xl`}>
            <img src={require('../../assets/images/faces/1.jpg')} alt="Profile" />
          </div>
          <div className={styles.name}>
            <h5 className={styles.username}>John Duck</h5>
            <h6 className={styles.handle}>@johnducky</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;