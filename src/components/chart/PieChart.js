import React from 'react'
import {  Pie } from 'react-chartjs-2';
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
        'rgb(255, 231, 191)',
        'rgb(255, 196, 196)',
        'rgb(255, 134, 158)',
        'rgb(239, 91, 12)',
        'rgb(212, 146, 104)',
        'rgb(217, 248, 196)',
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
        text: 'Pie Chart',
      },
    },
  };

export const PieChart = () => {

  return (
    <>
      <Pie data={data} options={options} height={300}/>

    </>
  )
}
