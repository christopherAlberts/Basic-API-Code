const express = require('express'); // Import package
const app = express(); // Execute package
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');

app.use('/posts', postsRoute);
app.use('/user', userRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});


// Connect to database (Hard coded)
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    //{ useUnifiedTopology: true },
    () => console.log('connected to DB!')
);

// How we start listening to the server
app.listen(3000);