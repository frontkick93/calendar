import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, CategoryScale, BarController, LinearScale, BarElement } from 'chart.js';
Chart.register(CategoryScale, BarController, LinearScale, BarElement);


function MyHome4() {

        const [chartData, setChartData] = useState(null);
    
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:3002/Mynewdata');
                    const data = response.data.query1;
                    console.log(data)
                    // Assume data has fields "label" and "value"
                    setChartData({
                        labels: data.map(item => item.type),    
                        datasets: [{
                            label: 'My Dataset',
                            data: data.map(item => item.staffname2),
                            backgroundColor: 'rgba(75,192,192,0.6)'
                        }]
                    });
                } catch (error) {
                    console.error('Error fetching data', error);
                }
            };
    
            fetchData();
        }, []);

        if (!chartData) return <div>Loading...</div>;

        return (
            
            <div className="App">
                <Bar data={chartData} 
                
                />
            </div>
        );
    }

export default MyHome4;

