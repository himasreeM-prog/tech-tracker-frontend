import React, { useEffect, useState } from 'react';
import api from '../api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('/').then((res) => {
      setItems(res.data);
    });
  }, []);

  const data = {
    labels: items.map((item) => item.title),
    datasets: [
      {
        label: 'Progress (%)',
        data: items.map((item) => item.progress),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h3>📊 Learning Progress Chart</h3>
      <Bar data={data} />
    </div>
  );
};

export default ProgressChart;
