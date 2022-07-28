import React from 'react'
import {  Line } from 'react-chartjs-2';
import assetsData from "./data.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

 const data = {
  labels:assetsData.map((item)=>item.assets),
  datasets: [
    {
      label: 'Dataset 1',
      data:assetsData.map((item)=>item.price),
      borderColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
    },
  
  ],
};

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart',
      },
    },
  };

export const LineChart = () => {

  return (
    <>
      <Line data={data} options={options}/>

    </>
  )
}
