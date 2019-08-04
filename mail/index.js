const nodemailer = require('nodemailer');

class Mailer{
    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
    port: 25,
    auth: {
        user: 'jrosalesg98@gmail.com',
        pass: 'Rorchach1'
    }
        });
        this.mailOptions = {
            from:'"Testing Mail" <abilira@hotmail.com>'
        };
        //Validar que el transporte si tiene una conexion valida
        // this.transporter.verify();
    }

    sendMail(options){
        console.log('Mandar Correo exitoso');
        let mailOptions = {
            ...this.mailOptions,
            ...options,
        }
        this.transporter.sendMail(mailOptions,(error, info) =>{
            if(error){
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        })
        console.log('mandar correo');
         // send mail with defined transport object
        

    }
}

module.exports = new Mailer();