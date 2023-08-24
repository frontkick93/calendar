import { useState, useEffect } from 'react';
import React from "react";
import axios from 'axios';

function Myhome2_data(){

    const containerStyle = {
        fontSize: '16px', // Adjust as needed
        color: 'red'// Other styles
      };

    const [data, setData] = useState([]);

    useEffect(() => {

        //Make an HTTP request to fetch data
        axios.get('http://localhost:3002/Mynewdata')
        .then(response => {
        const mydata = response.data;
        console.log(response.data)
        setData(mydata.query1)
        
        })
        .catch(error =>{
            console.error('Error fetching data:', error)
        });
        
},[])


return (
    <div style ={containerStyle}>
        

        {data.map(item => (
            <li key={item.movementidd}>{item.movementidd},{item.newmend},{item.staffname2}</li>
        ))}
    
    
</div>
)

}
export default Myhome2_data;