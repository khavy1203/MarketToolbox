import React from 'react';
import StatsCard from '../common/StatsCard';
import ChartCard from '../common/ChartCard';
import CommentsTable from '../common/CommentsTable';
import UserProfile from '../common/UserProfile';
import RecentMessages from '../common/RecentMessages';
import VisitorsProfile from '../common/VisitorsProfile';
import styles from '../../styles/MainContent.module.css';
import { Comment, Message } from '../../types/comment';

interface MainContentProps {
  stats: { title: string; value: string; icon: string; color: string }[];
  comments: Comment[];
  messages: Message[];
}

const MainContent: React.FC<MainContentProps> = ({ stats, comments, messages }) => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.pageHeading}>
        <h3>Profile Statistics</h3>
      </div>
      <div className={styles.pageContent}>
        <section className={styles.row}>
          <div className={styles.leftColumn}>
            <div className={styles.statsRow}>
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>
            <div className={styles.chartRow}>
              <ChartCard
                title="Profile Visit"
                chartId="chart-profile-visit"
                data={{
                  series: [{ name: 'Visits', data: [100, 200, 150, 300, 250] }],
                  options: {
                    chart: { type: 'line' },
                    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
                  },
                }}
              />
            </div>
            <div className={styles.commentsRow}>
              <div className={styles.visitCard}>
                <ChartCard
                  title="Profile Visit"
                  chartId="chart-europe"
                  data={{
                    series: [862],
                    options: {
                      chart: { type: 'donut' },
                      labels: ['Europe'],
                    },
                  }}
                />
                <ChartCard
                  chartId="chart-america"
                  data={{
                    series: [375],
                    options: {
                      chart: { type: 'donut' },
                      labels: ['America'],
                    },
                  }}
                />
                <ChartCard
                  chartId="chart-indonesia"
                  data={{
                    series: [1025],
                    options: {
                      chart: { type: 'donut' },
                      labels: ['Indonesia'],
                    },
                  }}
                />
              </div>
              <div className={styles.commentsCard}>
                <CommentsTable comments={comments} />
              </div>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <UserProfile />
            <RecentMessages messages={messages} />
            <VisitorsProfile />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;