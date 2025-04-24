import React from 'react';
import Chart from 'react-apexcharts';
import styles from '../../styles/ChartCard.module.css';

interface ChartCardProps {
  title?: string;
  chartId: string;
  data: {
    series: any[];
    options: any;
  };
}

const ChartCard: React.FC<ChartCardProps> = ({ title, chartId, data }) => {
  return (
    <div className={styles.card}>
      {title && (
        <div className={styles.cardHeader}>
          <h4>{title}</h4>
        </div>
      )}
      <div className={styles.cardBody}>
        <Chart
          options={data.options}
          series={data.series}
          type={data.options.chart.type}
          height={200}
        />
      </div>
    </div>
  );
};

export default ChartCard;