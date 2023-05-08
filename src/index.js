require('dotenv').config();
const express = require('express');
const cors = require('cors');
const employeeRouter = require('./routes/employee');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/employees', employeeRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});