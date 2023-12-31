const express = require("express");
const QRCode = require('qrcode');
const { PassThrough } = require('stream');
const generatePayload = require('promptpay-qr');

const qrAPI = require("./api/qr");


const app = express();

app.use("/qr", qrAPI);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
