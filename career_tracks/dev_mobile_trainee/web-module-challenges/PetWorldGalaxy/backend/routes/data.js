const nodemailer = require('nodemailer'); // Adicione essa linha
var express = require('express');
const { ValidationError } = require('sequelize');
const DateJS = require('datejs');

const smtpConfig = require('../configs/smtpConfig');
const smtpSettings = nodemailer.createTransport(smtpConfig);

const Formdata = require('../models/Formdata');

const { checkIsEmpty } = require('../validators');
const { validationForm } = require('../validators/formdata');

var router = express.Router();

async function sendResponseEmail(formData) {
  try {
    const createdAtDate = Date.parse(formData.createdAt);
    const formattedDateBR = createdAtDate.toString('dd/MM/yyyy');

    const mailOptions = {
      from: `"Nome do Remetente" <${smtpConfig.auth.user}>`,
      to: 'andressaandrade5243@gmail.com',
      subject: 'Resposta Automática: Novo Formulário Recebido',
      html: `
          <p>Um novo formulário foi recebido:</p>
          <ul>
              <li><strong>Nome:</strong> ${formData.name}</li>
              <li><strong>E-mail:</strong> ${formData.email}</li>
              <li><strong>Telefone:</strong> ${formData.phonenumber}</li>
              <li><strong>Mensagem:</strong> ${formData.message}</li>
              <li><strong>Data da criação : </strong> ${formattedDateBR}</li>
              </ul>
          <br> 
          <p>Atenciosamente,</p>
          <p>Equipe Lucas Dev</p>
      `,
    };

    const info = await smtpSettings.sendMail(mailOptions);

  } catch (error) {
    console.error('Error sending email:', error);
  }
}


router.post(
  '/',
  validationForm,
  async (req, res) => {
    if (checkIsEmpty(req, res)) {
      return;
    }

    try {

      const { name, email, phonenumber, message } = req.body;

      const insert = await Formdata.create({
        name,
        email,
        phonenumber,
        message,
      });
      const formdata = await Formdata.findByPk(insert.get('id'));

      sendResponseEmail(formdata); // Chama a função para enviar o e-mail de resposta
      if(!sendResponseEmail) {
          console.log('nao foi enviado');
      } else {
         res.status(201).json();
         return;
      }
     

    } catch (error) {
      console.warn(error);
      res.status(500).send();
    }
  },
);




module.exports = router;
