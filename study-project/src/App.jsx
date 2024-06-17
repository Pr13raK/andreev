import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RoadmapImage from './components/RoadmapImage';
import CourseTabs from './components/CourseTabs';
import TopicPage from './components/TopicPage';
import LoginPage from './components/LoginPage';
import { Box, Container } from '@mui/material';
import './App.css';

function App() {
  return (
    <Router>
      <Box className="app-container">
        <Header />
        <Container className="content-container">
          <Routes>
            <Route path="/" element={<><RoadmapImage /><CourseTabs /></>} />
            <Route path="/topic/:id" element={<TopicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<LoginPage />} />
          </Routes>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
