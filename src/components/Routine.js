// src/components/Routine.js
import React from 'react';
import ClassItem from './ClassItem';

const routine = {
  Sunday: [
    {
      room: 'R-1307',
      time: '09:45 AM - 11:00 AM',
      course: '0413-101, Introduction to Business (Sec.A)',
      instructor: 'KK',
    },
    {
      room: 'R-1307',
      time: '11:00 AM - 12:15 PM',
      course: '0612-101, Networking And Information Technology (Sec.A)',
      instructor: 'TM',
    },
    {
      room: 'R-1117 (Lab)',
      time: '01:30 PM - 02:45 PM',
      course: '0612-102, Networking And Information Technology Lab (Sec.A1)',
      instructor: 'TM',
    },
    {
      room: 'R-1117 (Lab)',
      time: '02:45 PM - 04:00 PM',
      course: '0612-102, Networking And Information Technology Lab (Sec.A1)',
      instructor: 'TM',
    },
  ],
  Monday: [
    {
      room: 'R-1303',
      time: '09:45 AM - 11:00 AM',
      course: '1015-101, Introduction to Tourism & Hospitality Management (Sec.A)',
      instructor: 'SS',
    },
    {
      room: 'R-1306',
      time: '12:15 PM - 01:30 PM',
      course: '1022-101, Food Safety, Hygiene and Sanitation (Sec.A)',
      instructor: 'NN',
    },
    {
      room: 'R-1307',
      time: '02:45 PM - 04:00 PM',
      course: '1022-102, Food Safety, Hygiene and Sanitation Lab (Sec.A1)',
      instructor: 'NN',
    },
    {
      room: 'R-1307',
      time: '04:00 PM - 05:15 PM',
      course: '1022-102, Food Safety, Hygiene and Sanitation Lab (Sec.A1)',
      instructor: 'NN',
    },
  ],
  Tuesday: [
    {
      room: 'R-1118-A',
      time: '08:30 AM - 09:45 AM',
      course: '0413-101, Introduction to Business (Sec.A)',
      instructor: 'KK',
    },
    {
      room: 'R-1307',
      time: '09:45 AM - 11:00 AM',
      course: '0231-101, English for Hospitality (Sec.A)',
      instructor: 'ABB',
    },
    {
      room: 'R-1117 (Lab)',
      time: '01:30 PM - 02:45 PM',
      course: '0612-101, Networking And Information Technology (Sec.A)',
      instructor: 'TM',
    },
    {
      room: 'R-1117 (Lab)',
      time: '02:45 PM - 04:00 PM',
      course: '0612-102, Networking And Information Technology Lab (Sec.A2)',
      instructor: 'TM',
    },
    {
      room: 'R-1117 (Lab)',
      time: '04:00 PM - 05:15 PM',
      course: '0612-102, Networking And Information Technology Lab (Sec.A2)',
      instructor: 'TM',
    },
  ],
  Wednesday: [
    {
      room: 'R-1118-A',
      time: '08:30 AM - 09:45 AM',
      course: '1015-101, Introduction to Tourism & Hospitality Management (Sec.A)',
      instructor: 'SS',
    },
    {
      room: 'R-1307',
      time: '11:00 AM - 12:15 PM',
      course: '0231-101, English for Hospitality (Sec.A)',
      instructor: 'ABB',
    },
    {
      room: 'R-1307',
      time: '12:15 PM - 01:30 PM',
      course: '1022-101, Food Safety, Hygiene and Sanitation (Sec.A)',
      instructor: 'NN',
    },
    {
      room: 'R-1307',
      time: '02:45 PM - 04:00 PM',
      course: '1022-102, Food Safety, Hygiene and Sanitation Lab (Sec.A2)',
      instructor: 'NN',
    },
    {
      room: 'R-1307',
      time: '04:00 PM - 05:15 PM',
      course: '1022-102, Food Safety, Hygiene and Sanitation Lab (Sec.A2)',
      instructor: 'NN',
    },
  ],
};

const Routine = () => {
  return (
    <div>
      {Object.entries(routine).map(([day, classes]) => (
        <div key={day}>
          <h2>{day}</h2>
          {classes.map((classInfo, index) => (
            <ClassItem key={index} {...classInfo} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Routine;
