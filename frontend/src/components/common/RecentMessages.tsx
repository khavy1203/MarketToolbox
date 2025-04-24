import React from 'react';
import { Message } from '../../types/comment';
import styles from '../../styles/RecentMessages.module.css';

interface RecentMessagesProps {
  messages: Message[];
}

const RecentMessages: React.FC<RecentMessagesProps> = ({ messages }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4>Recent Messages</h4>
      </div>
      <div className={styles.cardContent}>
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>
            <div className={`${styles.avatar} avatar-lg`}>
              <img src={message.avatar} alt="Avatar" />
            </div>
            <div className={styles.name}>
              <h5 className={styles.username}>{message.name}</h5>
              <h6 className={styles.handle}>{message.handle}</h6>
            </div>
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          <button className={styles.button}>Start Conversation</button>
        </div>
      </div>
    </div>
  );
};

export default RecentMessages;