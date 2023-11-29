const express = require("express");
const QRCode = require('qrcode');
const { PassThrough } = require('stream');
const generatePayload = require('promptpay-qr');

const mobileNumber ='';
const router = express.Router();

router.get('/', async (req, res) => {
    let amount = req.query.amount;
    mobileNumber = req.query.number;
    amount = Number(amount);
    let payload = generatePayload(mobileNumber, { amount });
    const qrStream = new PassThrough();
    const qrCode = await QRCode.toFileStream(qrStream, payload);
    res.type('png');
    qrStream.pipe(res);
});

module.exports = router;
