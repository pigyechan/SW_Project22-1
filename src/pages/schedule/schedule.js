import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from "@emotion/styled";
import { Calendar } from "@fullcalendar/core";


export function Schedule(props) {
  
  return(
   
      

    <div style = {{paddingTop : '1%', paddingLeft : '1%', paddingRight : '2%', paddingBottom : '1%', backgroundColor : 'white', textDecoration : 'none'}}>
      <FullCalendar defaultView="dayGridMonth"
        contentHeight={'700px'}
        textDecoration = 'none'
        events={[
          { title: '선수 OOO 훈련', date: '2022-05-20' },
          { title: 'vs 롯데', date: '2022-06-02' },]} 
        plugins={[dayGridPlugin]}
        locale = 'ko'
         />
    </div>
    )
}

  