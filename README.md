# Recipe Sharing Platform - Backend API

This is a backend API for a recipe-sharing platform that allows users to register, log in, manage their profiles, and perform CRUD operations on recipes. It is built using Node.js, Express.js, and a database system while following Object-Oriented Programming (OOP) principles.




## Features

-  User registration, authentication, and profile management

- CRUD operations for recipes

- Authentication using JWT tokens

- Secure API endpoints with authentication middleware


## Installation & Setup
  **Prerequisites**
  
  - Node.js installed

  - Database system (MongoDB/PostgreSQL) installed and running

**Steps to Run the Project**

- **Clone the repository:** https://github.com/shubhoo3/Recipe-sharing-platform.git


- **Install Independencies:** npm install

- **Set up environment variables:** Create a .env file in the root directory and add the following.
    PORT=5000
    DB_URI=your_database_connection_string
    JWT_SECRET=your_secret_key


## Technologies Used

- Node.js

- Express.js

- MongoDB / PostgreSQL (Choose one as your database)

- Mongoose / Sequelize (ORM for database interactions)

- JWT for authentication

- Dotenv for environment variables

## Authentication & Security

- Passwords are hashed using bcrypt.

- Authentication is implemented using JWT tokens.

- Middleware protects sensitive routes by validating JWT tokens.



