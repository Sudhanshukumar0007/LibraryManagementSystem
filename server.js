require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', bookRoutes);

app.get('/', (req, res) => {
  res.send("Library API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});