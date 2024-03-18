const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000;

// middleware
const corsOptions = {
    origin: [
        'http://localhost:5173', 'https://entertainment-freak.web.app', 'https://entertainment-freak.firebaseapp.com'
    ],
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


// const uri = "mongodb+srv://<username>:<password>@cluster0.zjzxbzp.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
        // collections
        const artistsCollection = client.db('entertainmentDB').collection('artists');
        const previousEventsCollection = client.db('entertainmentDB').collection('previousEvents');
        const categoriesCollection = client.db('entertainmentDB').collection('categories');
        const eventsCollection = client.db('entertainmentDB').collection('events');
        const ticketsCollection = client.db('entertainmentDB').collection('tickets');

        // JWT Related API
        app.post('/jwt', async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            }).send({ success: true });
        });
        app.post('/logout', async (req, res) => {
            const user = req.body;
            res.clearCookie('token', {
                maxAge: 0,
                sameSite: 'none',
                secure: true
            }).send({ success: true });
        });

        app.get('/artists', async (req, res) => {
            const result = await artistsCollection.find().toArray();
            res.send(result);
        });
        app.get('/previousEvents', async (req, res) => {
            const result = await previousEventsCollection.find().toArray();
            res.send(result);
        });
        app.get('/categories', async (req, res) => {
            const result = await categoriesCollection.find().toArray();
            res.send(result);
        });
        app.get('/categories/:id', async (req, res) => {
            const id = req.params.id;
            const query = { id: parseInt(id) };
            const result = await categoriesCollection.findOne(query);
            res.send(result);
        });
        app.get('/events', async (req, res) => {
            const categoryId = req.query.categoryId;
            let query = {};
            if (categoryId) {
                query.categoryId = parseInt(categoryId);
            }
            const result = await eventsCollection.find(query).toArray();
            res.send(result);
        });
        app.get('/tickets/:eventId', async (req, res) => {
            const eventId = req.params.eventId;
            const query = { eventId };
            const result = await ticketsCollection.findOne(query);
            res.send(result);
        });
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


// Local API
app.get('/', (req, res) => {
    res.send('Hello from Entertainment Freak Server..👩‍🎤');
});

app.listen(port, () => {
    console.log(`Entertainment Freak is running on port ${port}`);
});