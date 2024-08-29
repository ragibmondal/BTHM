// src/App.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Routine from './components/Routine';
import ThemeToggle from './components/ThemeToggle';
import { lightTheme, darkTheme } from './theme';

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container>
        <ThemeToggle toggleTheme={toggleTheme} />
        <Routine />
      </Container>
    </ThemeProvider>
  );
}

export default App;
