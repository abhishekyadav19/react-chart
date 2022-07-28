import React from 'react'
import {  Doughnut } from 'react-chartjs-2';
import assetsData from "./data.json";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);



 const data = {
  labels:assetsData.map((item)=>item.assets),
  datasets: [
    {
      label: 'Dataset 1',
      data:assetsData.map((item)=>item.price),
      backgroundColor: [
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
    maintainAspectRatio:false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Doughnut Chart',
      },
    },
  };

export const Dougnut = () => {

  return (
    <>
      <Doughnut data={data} options={options} height={300}/>

    </>
  )
}
