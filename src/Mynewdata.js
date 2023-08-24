import { useState, useEffect } from 'react';
import React from "react";

const Mynewdata = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {

        //Make an HTTP request to fetch data
        const fetchList = async () => {
            const response = await fetch('http://localhost:3002/Mynewdata')
            const data = await response.json();
            setData(data.query1);
            
        }; 
        fetchList();

},[]);
useEffect(() => {

    //Make an HTTP request to fetch data
    const fetchList2 = async () => {
        const response2 = await fetch('http://localhost:3002/Mynewdata')
        const data2 = await response2.json();
        setData2(data2.query2);
        
    }; 
    fetchList2();

},[]);


return (
    <>
        List of item1: {data.length}
    <p></p>
    List of item2: 
    <ul>
        {data2.map(item2 => (
            <li key={item2.movementidd}>{item2.newmstart},{item2.newmend}</li>
        ))}
    </ul>
    <h3>Number of rows: {data2.length}</h3>
    
</>
)

}
export default Mynewdata;