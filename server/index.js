const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
    origin: [
        'http://localhost:5173',
    ],
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

// Local API
app.get('/', (req, res) => {
    res.send('Hello from Entertainment Freak Server..👩‍🎤');
});

app.listen(port, () => {
    console.log(`Entertainment Freak is running on port ${port}`);
});