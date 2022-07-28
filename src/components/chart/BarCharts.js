import React from 'react'
import { Bar } from 'react-chartjs-2';
import assetsData from "./data.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      backgroundColor: [
        'rgb(140,215,170)',
        'rgb(222,187,223)',
        'rgb(154,165,207)',
        '#rgb(239,234,179)',
        'rgb(239,234,179)',
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
        text: 'Bar Chart',
      },
    },
  };

export const BarCharts = () => {





  return (
    <>
      <Bar data={data} options={options}/>

    </>
  )
}
