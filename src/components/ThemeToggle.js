// src/components/ThemeToggle.js
import React from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';

const ToggleContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ThemeToggle = ({ toggleTheme }) => (
  <ToggleContainer>
    <label style={{ marginRight: '10px' }}>Toggle Theme</label>
    <Switch onChange={toggleTheme} checked={false} />
  </ToggleContainer>
);

export default ThemeToggle;
