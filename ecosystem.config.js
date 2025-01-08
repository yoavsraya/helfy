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
    ],
};
