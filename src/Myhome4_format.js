import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

const Myhome4_format = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 2,
    
      }
    ]
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        color: 'red'
        
      }
    }
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};
export default Myhome4_format;