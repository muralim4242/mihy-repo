module.exports=(functions)=>{
  const nodemailer = require('nodemailer')
  const gmailEmail = encodeURIComponent(functions.config().gmail ? functions.config().gmail.email : '')
  const gmailPassword = encodeURIComponent(functions.config().gmail ? functions.config().gmail.password : '')
  const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`)
  return mailTransport;
}
