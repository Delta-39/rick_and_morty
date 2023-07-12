const express = require('express');
const cors = require('cors');
const router = require('./routes/index.js');
const {
    conn
} = require('./DB_connection');

const PORT = process.env.PORT || 3001;

const server = express();

// Middleware
server.use(cors());
server.use(express.json());

server.use('/rickandmorty', router);

server.use((req, res, next) => {
    res.status(404).json({
        error: 'Not found'
    });
});

conn.sync({
        force: true
    })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error syncing Sequelize with the database:', error);
    });

module.exports = server