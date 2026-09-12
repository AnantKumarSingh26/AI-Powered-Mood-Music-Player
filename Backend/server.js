require('dotenv').config(); // Load environment variables from .env file

const app = require('../Backend/src/app')
const connectDB = require('../Backend/src/config/database')

const PORT = process.env.PORT || 3000

connectDB(); // Connect to the database

app.listen(PORT, () => {
    console.log('SERVER IS RUNNING ON PORT-',PORT);
})