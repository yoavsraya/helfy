import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadComponent from './pages/UploadComponent';
import DBComponent from './pages/DBComponent';
import TopMenu from './components/TopMenu'; // Import the TopMenu component

const App = () => {
    return (
        <Router>
            <TopMenu />            
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/upload" element={<UploadComponent />} />
                <Route path="/database" element={<DBComponent />} />
            </Routes>
        </Router>
    );
};

export default App;
