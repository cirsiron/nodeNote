var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'QQ',
    auth: {
        user: '@qq.com',
        pass: 'cqpkxsfjjxiaiddi'
    }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '@qq.com', // sender address
    to: '@qq.com', // list of receivers
    subject: '打卡提醒', // Subject line
    text: '赞', // plaintext body
    html: '<b>这是一封有情怀的邮件</b>' // html body！
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent: ' + info.response);
    }
});