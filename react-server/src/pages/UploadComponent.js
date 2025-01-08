import React, { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            setSelectedFile(file);
        } else {
            alert('Please select a valid JPEG or PNG file');
            setSelectedFile(null);
        }
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadStatus(response.data.message);
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('Failed to upload file');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Upload File</h1>
            <input type="file" accept="image/jpeg, image/png" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default UploadComponent;