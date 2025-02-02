import React from 'react';
import { styles     } from './barchartStyles';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Box } from '@mui/material';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: ['Jul', 'Jun', 'May'], // Y-axis labels (Months)
    datasets: [
      {
        label: 'Data', // Label for the dataset
        data: [6, 4, 3], // Data values corresponding to the months
        backgroundColor: ['rgba(153, 102, 255, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 99, 132, 0.8)'], // Change Jul to purple
        borderColor: ['rgba(153, 102, 255, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }
    ]
  };

  const options = {
    indexAxis: 'y', // Horizontal bar chart
    scales: {
      x: {
        min: 2, // Set the minimum to 2k
        max: 6, // End x-axis at 6k
        ticks: {
          stepSize: 1, // Increment ticks by 1k
          callback: function (value) {
            if (value === 2) return '2k'; // 2k label
            if (value === 3) return '3k'; // 3k label
            if (value === 4) return '4k'; // 4k label
            if (value === 5) return '5k'; // 5k label
            if (value === 6) return '6k'; // 6k label
            return ''; // Hide any other values
          }
        },
        beginAtZero: false, // Avoid starting from 0
        grid: {
          color: '#fff' // Change grid line color
        }
      },
      y: {
        title: {
          display: false // Hide y-axis title
        },
        ticks: {
          color: '#000' // Change the text color for months
        }
      }
    },
    plugins: {
      legend: {
        display: false // Hide the legend
      }
    },
    responsive: true,
    maintainAspectRatio: false // Allow the chart to fill its container
  };

  return (
    <Box sx={styles.chartcontainer}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;

