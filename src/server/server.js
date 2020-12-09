import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

app.get('*', (req, res) => {
    if (ENV === 'development') {
        console.log('Development Config');
    }
    res.send({ hello: 'express' });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server running in http://localhost:3000');
    }
});