const { checkSchema } = require('express-validator');

const validationForm = checkSchema(
    {
        name: {
            isLength: {
                options: { min: 1, max: 200 },
                errorMessage: 'Your name must have a minimum of 1 and a maximum of 200 characters',
            },
            isString: {
                errorMessage: 'This must be a string',
            },
            notEmpty: {
                errorMessage: 'Can Not be Empty',
            },
        },
        email: {
            isEmail: {
                errorMessage: 'Provide an Email Address',
            },
            isLength: {
                options: { min: 1, max: 200 },
                errorMessage: 'Your email must have a minimum of 1 and a maximum of 200 characters',
            },
            notEmpty: {
                errorMessage: 'Can Not be Empty',
            },
            isString: {
                errorMessage: 'This must be a string',
            },
        },
        phonenumber: {
            isMobilePhone: {
                errorMessage: 'Provide a valid phone number',
                options: ['pt-BR', 'en-US'],
            },
        },
        message: {
            isLength: {
                options: { min: 1, max: 1000 },
                errorMessage: 'Your message must have a minimum of 1 and a maximum of 200 characters',
            },
            notEmpty: {
                errorMessage: 'Can Not be Empty',
            },
            isString: {
                errorMessage: 'This must be a string',
            },
        },
    },
    ['body'],
);

module.exports = {
    validationForm,
};