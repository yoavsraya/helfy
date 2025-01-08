module.exports = {
    apps: [
        {
            name: 'react-server',
            script: 'npm',
            args: 'start',
            cwd: './react-server', 
            env: {
                PORT: 5001,
                NODE_ENV: 'development',
            },
        },
        {
            name: 'node-server',
            script: 'npm',
            args: 'run start', 
            cwd: './web-server',
            env: {
                PORT: 3000,
                NODE_ENV: 'production',
            },
        },
        {
            name: 'python-server',
            script: 'python3', // Python interpreter
            args: './python-server/yolo_api.py', // Python script to run
            cwd: './python-server', // Change working directory to Python server folder
            env: {
                PORT: 8000,
            },
        },
    ],
};
