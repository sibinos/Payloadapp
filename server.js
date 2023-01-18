const express = require('express');
const payload = require('payload');
const path=require( 'path')
const cors = require('cors')
const nodemailerSendgrid=require('nodemailer-sendgrid');

// const sgMail = require('@sendgrid/mail')
// const nodemailer = require('nodemailer');

require('dotenv').config();
const app = express();
app.use(express.json())

app.use(cors())
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});
app.use('/assets', express.static(path.resolve(__dirname, './assets')));
// Initialize Payload
const sendGridAPIKey = process.env.SENDGRID_API_KEY;

payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
  ... sendGridAPIKey ? {
    email: {
      transportOptions: nodemailerSendgrid({
        apiKey: sendGridAPIKey,
      }),
      fromName: 'Admin',
      fromAddress: 'no-reply.cvsad@simplelogin.com',
    },
  } : {},
});

app.listen(8082);
