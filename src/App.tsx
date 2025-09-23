import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import Home from './components/Home';
import Question from './components/Question';
import Results from './components/Results';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity/:activityId" element={<Question />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Router>
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;
