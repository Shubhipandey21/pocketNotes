const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const groupRoutes = require('./routes/groupRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/pocketnotes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(express.json());

app.use('/api/groups', groupRoutes);
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
