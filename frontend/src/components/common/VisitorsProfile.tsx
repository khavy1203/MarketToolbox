import React from 'react';
import Chart from 'react-apexcharts';
import styles from '../../styles/VisitorsProfile.module.css';
import { ApexOptions } from 'apexcharts'; // Add this import

const VisitorsProfile: React.FC = () => {
  const data: { series: number[]; options: ApexOptions } = { // Explicitly type data
    series: [45, 35, 20],
    options: {
      chart: { type: 'donut' },
      labels: ['Returning', 'New', 'Others'],
      colors: ['#007bff', '#28a745', '#dc3545'],
    },
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4>Visitors Profile</h4>
      </div>
      <div className={styles.cardBody}>
        <Chart
          options={data.options}
          series={data.series}
          type="donut"
          height={200}
        />
      </div>
    </div>
  );
};

export default VisitorsProfile;