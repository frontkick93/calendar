import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'



function MyHome2(){
  const customEventStyleGetter = (event, start , end, isSelected) =>{
    const eventWidth = 100;
    const eventHeight = 40;
    
    return {
        style: {
            width: `${eventWidth}`,
            height:`${eventHeight}px`,
            fontSize: '20px',
            color: 'red',
            backgroundColor:'lightblue ',
        },
    };
};
const[data, setData] = useState([]);

useEffect(() => {
  
  axios.get('http://localhost:3002/Mynewdata')
  .then(response => {
    console.log(response.data)
    //setEvent(response.data);
    const mydata = response.data;
        console.log(response.data)
        setData(mydata.query1)
  })
  .catch(err => {
    console.error('Error fetching data:', err);
});

},[]);
console.log(data);
const localizer = momentLocalizer(moment);

    return(
        
        <>
          <h1>Staff Leave Calendar</h1>
            <h2 id="calendar_bar">
            <Calendar 
        
          localizer={localizer}
          events={data}
          formats = {{dayHeaderFormat:(data)=>moment(data).format('dddd @ DD')}}
          startAccessor="newmstart"
          endAccessor="newmend"
          titleAccessor="type"
        
        
          eventPropGetter={customEventStyleGetter}

          style={{
            height: 600,
            width: 1800
            }}
     
        />
        </h2>
      </>
    )
}
export default MyHome2;