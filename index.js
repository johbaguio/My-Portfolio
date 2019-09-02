const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/Contact', (req, res) => {
    console.log(req.body)
    // nodemailer.createTestAccount((err,account) => {
    //     const htmlEmail = `
    //     <h3> Contact Details </h3>
    //     <ul> 
    //         <li> Name: ${req.body.name} </li>
    //         <li> Email: ${req.body.email} </li>
    //     </ul>
    //     <h3> Message </h3>
    //     <p> ${req.body.message}</p>
        
    //     `

    //     let transporter = nodemailer.createTransport({
    //         host: 'smtp.ethereal.email',
    //         port: 587,
    //         auth: {
    //             user:'fredy70@ethereal.email',
    //             pass: 'mv4GJq3Ex14ZBFTBu5'
    //         }

    //     })

    //     let mailOptions = {
    //         from: 'test@testaccount.com',
    //         to: 'fredy70@ethereal.email',
    //         replyTo: 'test@testaccount.com',
    //         subject: 'New Message',
    //         text: req.body.message,
    //         html: htmlEmail
    //     }

    //     transporter.sendMail(mailOptions, (err, info) => {
    //         if(err){
    //             return console.log(err)
    //         }

    //         console.log('Message sent: ', info.message );
    //         console.log('Message URL: ', nodemailer.getTestMessageUrl(info));
    //     })
    // })
    
})

const PORT = process.env.PORT || 3001;

app.listen (PORT, () => {
    console.log(`Server listening on port ${PORT} `)
})

