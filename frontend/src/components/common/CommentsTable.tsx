import React from 'react';
import { Comment } from '../../types/comment';
import styles from '../../styles/CommentsTable.module.css';

interface CommentsTableProps {
  comments: Comment[];
}

const CommentsTable: React.FC<CommentsTableProps> = ({ comments }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4>Latest Comments</h4>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.tableResponsive}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment, index) => (
                <tr key={index}>
                  <td className={styles.nameColumn}>
                    <div className={styles.user}>
                      <div className={`${styles.avatar} avatar-md`}>
                        <img src={comment.avatar} alt="Avatar" />
                      </div>
                      <p className={styles.name}>{comment.name}</p>
                    </div>
                  </td>
                  <td className={styles.commentColumn}>
                    <p className={styles.comment}>{comment.comment}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommentsTable;