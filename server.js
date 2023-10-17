const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const MONGODB_URL = 'mongodb://localhost:27017/Marketplace'; //Connect to the db
const PORT = 3000;
app.use(express.json()); // This allows you to use JSON data in POST requests
app.use(cors());
mongoose.connect(MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{console.log('Connected to MongoDB')})
.catch(error =>{console.error('Error connecting to MongoDB:',error.message)});
app.get('/', (req, res) => {  
    res.json({ "message": "Welcome to Marketplace application." });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});