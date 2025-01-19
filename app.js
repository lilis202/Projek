const express = require('express');
const userRoutes = require('./routes/userRoutes');
const shipmentRoutes = require('./routes/shipmentRoutes');
const branchRoutes = require('./routes/branchRoutes');
const publicRoutes = require('./routes/publicRoutes');
const sequelize = require('./config/db');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/shipments', shipmentRoutes);
app.use('/api/branches', branchRoutes);
app.use('/api/public', publicRoutes);

sequelize.sync().then(() => {
    console.log('Database synchronized');
}).catch((err) => console.log('Error syncing database: ', err));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
