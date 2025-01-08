import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopMenu = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#eee' }}>
            <button onClick={() => navigate('/upload')}>Upload</button>
            <button onClick={() => navigate('/database')}>Database</button>
        </div>
    );
};

export default TopMenu;