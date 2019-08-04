const express = require('express');
const router = express.Router();
const mailer = require('../../mail');
const sale = require('../controllers/sale.controller');
//PRUEBA ENVIO MAIL
router.get('/email',(req, res)=> {
    let mailOptions = {
        
        to: 'abilira34@gmail.com',
        subject:`Orden realizada`,
        text:'Este es un Email',
        html:'<b>COMIDA CHINA</b>'
    }
mailer.sendMail(mailOptions);
});
router.get('/', sale.getSales);
router.post('/', sale.createSale);
router.get('/:id', sale.getSale);
router.put('/:id', sale.editSale);
router.delete('/:id', sale.deleteSale);

module.exports = router;