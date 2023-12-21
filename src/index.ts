import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/', router())


const server = http.createServer(app);

const MONGO_URL = 'mongodb+srv://evasuslovaa:1q2w3e4r@cluster0.k31ohhb.mongodb.net/';

async function start() {
    try {
        mongoose.connect(MONGO_URL);
        server.listen(8080, () => {
            console.log('Server running 8080')
        })
    } catch (error) {
        console.log(error);
    }
}

start();
