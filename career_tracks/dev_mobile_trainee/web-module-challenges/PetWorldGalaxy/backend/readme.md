
# Backend - Pet Shop World Galaxy

This is a server (backend) built to receive and process contact form submissions from users. The server is developed using Node.js technology and integrates features for data validation, storage in a database, and email sending using SMTP.

## Features

The backend includes the following main features:

1. **Form Submission Route:** A route is implemented to receive data submitted through the contact form. This route validates the received data to ensure it is correct and complete.

2. **Data Validation:** The received data is validated to ensure that invalid or missing information is not processed. The `express-validator` library is used for data validation.

3. **Database Storage:** Valid form data is inserted and stored in a database. In this project, an MySQL database is used for this purpose. This allows form data to be recorded.

4. **Email Sending via SMTP:** After successful insertion of data into the database, the server sends a response email to the website administrator. The email contains the received form information. The `nodemailer` library is used for sending emails, and SMTP information such as server, port, authentication, and security is configured.

## Setup

To run the backend locally, follow the steps below:

1. Clone this repository to your local environment.
2. Access the project folder...
```sh
cd carrer_tracks
cd dev_mobile_trainee
cd web-module-challenges
cd PetWorldGalaxy
cd backend
```
3. Install project dependencies using the command: `npm install`.
4. Configure the environment variables in the file (dev.env). 
5. Configure SMTP information in the `smtpConfig.js` file in the specified format.
6. Start the server using the command: `npm run dev`.
7. The server will be running at `http://localhost:3000`.
8. use a postman collection that is in this directory and send and do tests.

## Technologies Used

- Node.js
- Express.js
- MySQL (Database)
- `express-validator` (Data Validation)
- `nodemailer` (Email Sending)
- `bcryptjs` (Password Hashing)
- `cookie-parser` (HTTP Cookie Parsing)
- `cors` (Cross-Origin Resource Sharing)
- `datejs` (Date Formatting)
- `debug` (Debugging)
- `dotenv` (Environment Variables)
- `http-errors` (HTTP Errors)
- `morgan` (HTTP Request Logging)
- `mysql2` (MySQL Database Driver)
- `sequelize` (ORM for MySQL)

## CONTACT

If you have any questions, suggestions or just want to chat with me about technology, feel free to contact me!

- Email: lucasmedeiroscosta07@gmail.com
- LinkedIn: [Lucas Medeiros](https://www.linkedin.com/in/medeirosdev)
- GitHub: [LucasMdct](https://github.com/lucasmdct)
- Web: [MedeirosDev](https://medeirosdev.cloud)
---
*Last update: 29/08/2023.*