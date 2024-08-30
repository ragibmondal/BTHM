// src/components/Routine.js
import React from 'react';
import './Routine.css'; // Import the CSS file for styling

// Utility function to get today's classes
const getTodayClasses = (routine) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayName = days[today.getDay()];
  return routine[dayName] || [];
};

const routine = {
  Sunday: [
    { time: '09:45 AM - 11:00 AM', courseCode: '0413-101', courseTitle: 'Introduction to Business', section: 'Sec.A', room: 'R-1307', teacher: 'KK' },
    { time: '11:00 AM - 12:15 PM', courseCode: '0612-101', courseTitle: 'Networking And Information Technology', section: 'Sec.A', room: 'R-1307', teacher: 'TM' },
    { time: '01:30 PM - 02:45 PM', courseCode: '0612-102', courseTitle: 'Networking And Information Technology Lab', section: 'Sec.A1', room: 'R-1117(Lab)', teacher: 'TM' },
    { time: '02:45 PM - 04:00 PM', courseCode: '0612-102', courseTitle: 'Networking And Information Technology Lab', section: 'Sec.A1', room: 'R-1117(Lab)', teacher: 'TM' },
  ],
  Monday: [
    { time: '09:45 AM - 11:00 AM', courseCode: '1015-101', courseTitle: 'Introduction to Tourism & Hospitality Management', section: 'Sec.A', room: 'R-1303', teacher: 'SS' },
    { time: '12:15 PM - 01:30 PM', courseCode: '1022-101', courseTitle: 'Food Safety, Hygiene and Sanitation', section: 'Sec.A', room: 'R-1306', teacher: 'NN' },
    { time: '02:45 PM - 04:00 PM', courseCode: '1022-102', courseTitle: 'Food Safety, Hygiene and Sanitation Lab', section: 'Sec.A1', room: 'R-1307', teacher: 'NN' },
    { time: '04:00 PM - 05:15 PM', courseCode: '1022-102', courseTitle: 'Food Safety, Hygiene and Sanitation Lab', section: 'Sec.A1', room: 'R-1307', teacher: 'NN' },
  ],
  Tuesday: [
    { time: '08:30 AM - 09:45 AM', courseCode: '0413-101', courseTitle: 'Introduction to Business', section: 'Sec.A', room: 'R-1118-A', teacher: 'KK' },
    { time: '09:45 AM - 11:00 AM', courseCode: '0231-101', courseTitle: 'English for Hospitality', section: 'Sec.A', room: 'R-1307', teacher: 'ABB' },
    { time: '01:30 PM - 02:45 PM', courseCode: '0612-101', courseTitle: 'Networking And Information Technology', section: 'Sec.A', room: 'R-1117(Lab)', teacher: 'TM' },
    { time: '02:45 PM - 04:00 PM', courseCode: '0612-102', courseTitle: 'Networking And Information Technology Lab', section: 'Sec.A2', room: 'R-1117(Lab)', teacher: 'TM' },
    { time: '04:00 PM - 05:15 PM', courseCode: '0612-102', courseTitle: 'Networking And Information Technology Lab', section: 'Sec.A2', room: 'R-1117(Lab)', teacher: 'TM' },
  ],
  Wednesday: [
    { time: '08:30 AM - 09:45 AM', courseCode: '1015-101', courseTitle: 'Introduction to Tourism & Hospitality Management', section: 'Sec.A', room: 'R-1118-A', teacher: 'SS' },
    { time: '11:00 AM - 12:15 PM', courseCode: '0231-101', courseTitle: 'English for Hospitality', section: 'Sec.A', room: 'R-1307', teacher: 'ABB' },
    { time: '12:15 PM - 01:30 PM', courseCode: '1022-101', courseTitle: 'Food Safety, Hygiene and Sanitation', section: 'Sec.A', room: 'R-1307', teacher: 'NN' },
    { time: '02:45 PM - 04:00 PM', courseCode: '1022-102', courseTitle: 'Food Safety, Hygiene and Sanitation Lab', section: 'Sec.A2', room: 'R-1307', teacher: 'NN' },
    { time: '04:00 PM - 05:15 PM', courseCode: '1022-102', courseTitle: 'Food Safety, Hygiene and Sanitation Lab', section: 'Sec.A2', room: 'R-1307', teacher: 'NN' },
  ],
};

const Routine = () => {
  const todayClasses = getTodayClasses(routine);

  return (
    <div className="routine">
      <h2>Today's Classes</h2>
      {todayClasses.length > 0 ? (
        <table className="today-classes">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Section</th>
              <th>Time Slot</th>
              <th>Room</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {todayClasses.map((classInfo, index) => (
              <tr key={index}>
                <td>{classInfo.courseCode}</td>
                <td>{classInfo.courseTitle}</td>
                <td>{classInfo.section}</td>
                <td>{classInfo.time}</td>
                <td>{classInfo.room}</td>
                <td>{classInfo.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No classes today!</p>
      )}

      <h2>Weekly Routine</h2>
      <table className="weekly-routine">
        <thead>
          <tr>
            <th>Day</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Section</th>
            <th>Time Slot</th>
            <th>Room</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(routine).map(([day, classes]) => (
            <React.Fragment key={day}>
              {classes.map((classInfo, index) => (
                <tr key={index} className={todayClasses.includes(classInfo) ? 'highlight' : ''}>
                  {index === 0 && <td rowSpan={classes.length}>{day}</td>}
                  <td>{classInfo.courseCode}</td>
                  <td>{classInfo.courseTitle}</td>
                  <td>{classInfo.section}</td>
                  <td>{classInfo.time}</td>
                  <td>{classInfo.room}</td>
                  <td>{classInfo.teacher}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Routine;
