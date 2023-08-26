import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import ProfilePage from './Pages/ProfilePage';
import PostPage from './Pages/PostPage';
import GalleryPage from './Pages/GalleryPage';
import TodoPage from './Pages/TodoPage';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/postPage" element={<PostPage />} />
        <Route path="/galleryPage" element={<GalleryPage />} />
        <Route path="/todoPage" element={<TodoPage />} />
    </Routes>
</Router>
  );
}

export default App;
