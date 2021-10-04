require('dotenv').config()
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use('/getTrainSchedules', createProxyMiddleware({
    target: `${process.env.MARTA_URL}?apikey=${process.env.MARTA_API_KEY}`,
    headers: {
        accept: "application/json",
        method: "GET",
    },
    changeOrigin: true
}));
app.listen(8082);