// src/components/ClassItem.js
import React from 'react';
import styled from 'styled-components';

const ClassContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    padding: 5px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ClassItem = ({ room, time, course, instructor }) => (
  <ClassContainer>
    <p><strong>Room:</strong> {room}</p>
    <p><strong>Time:</strong> {time}</p>
    <p><strong>Course:</strong> {course}</p>
    <p><strong>Instructor:</strong> {instructor}</p>
  </ClassContainer>
);

export default ClassItem;
