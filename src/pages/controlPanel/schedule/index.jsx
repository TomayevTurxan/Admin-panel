import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import "./style.scss";

const Schedule = () => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 }; // Min değeri sıfır olarak ayarladık
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) + NUMBER_CFG.min),
        backgroundColor: '#6952e0',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Dataset 2',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) + NUMBER_CFG.min),
        backgroundColor: '#00de00',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Dataset 3',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) + NUMBER_CFG.min),
        backgroundColor: '#68d8ee',
        borderColor: '#258cf4',
        borderWidth: 1,
      },
      {
        label: 'Dataset 4',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min + 1)) + NUMBER_CFG.min),
        backgroundColor: '#258cf4',
        borderColor: '#258cf4',
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Bar Chart - Stacked',
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
        },
      },
      barThickness: 20, 
    },
  };
  

  useEffect(() => {
    const chart = new Chart(document.getElementById('myChart'), config);
    return () => chart.destroy();
  }, []);

  return (
    <div>
      <canvas id="myChart" width="400" height="400"></canvas>
      <div className="line"></div>
    </div>
  );
};

export default Schedule;
