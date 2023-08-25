import React ,{useState, useEffect} from "react";
//import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
//import './YourCalendarStyles.css';

function MyHome(){
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
    const containerStyle = {
        fontSize: '16px',
        width: '10px',
        height: '10px' // Adjust as needed
        // Other styles
      };


    const [data, setData] = useState([]);

    useEffect(() => {
    const fetchList = async () => {
        const response = await fetch('http://localhost:8090/Mynewdata')
        const data = await response.json();
        setData(data.query1);
        
    }; 
    fetchList();
    },[]);
    console.log(data)
    //const [value, onChange] = useState(new Date());
    const staffLeaveData = [
      {  
        id: 1,
        title:'peter tan = MC',
        newmstart: new Date(2023, 7,20),
       newmend: new Date(2023, 7, 21)
      },
      {
               id: 2,
        title:'John Smith - Leave',
        newmstart: new Date(2023, 7,23),
       newmend: new Date(2023, 7, 26)


      }

    //Add more leave events here
    ];
    const localizer = momentLocalizer(moment);


    return(
        
        <>
            <h1>Staff Leave Calendar</h1>
            <h2 id="calendar_bar">
            <Calendar 

            localizer={localizer}
            defaultView={"month"}
            events={data} 
            formats = {{dayHeaderFormat:(data)=>moment(data).format('dddd @ DD')}}
            startAccessor= "newmstart"
            endAccessor="newmend"
            titleAccessor={(data) => `${data.staffname2} - ${data.type}`}

            eventPropGetter={customEventStyleGetter}
            style={{
                    height: 600,
                    width: 1800,
                    }}
             
                    
            />
            </h2>

        </>




        /*<div>

            /*<Calendar onChange={onChange} value={value} />
        
        </div>*/

    )
}
export default MyHome;