Authentication Application with NestJS, PostgreSQL, and Prisma
This project demonstrates how to create an authentication system using NestJS, PostgreSQL, and Prisma. Following the guidelines provided in the official NestJS documentation for authentication, this application covers user registration, login, and protected routes.

Table of Contents
Getting Started
Prerequisites
Installation
Running the Application
Testing
Project Structure
Configuration
Endpoints
Contributing
License
Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v14 or higher)
npm or yarn
Docker (for running PostgreSQL)
Installation
Clone the repo

sh
Copy code
git clone https://github.com/your-username/auth-nestjs-jwt.git
cd auth-nestjs-jwt
Install NPM packages

sh
Copy code
npm install
Start PostgreSQL using Docker

sh
Copy code
docker run --name nestjs-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=authdb -p 5432:5432 -d postgres
Set up Prisma

sh
Copy code
npx prisma init
Update the .env file with your database connection string

makefile
Copy code
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/authdb?schema=public"
Run Prisma migrations

sh
Copy code
npx prisma migrate dev --name init
Generate Prisma client

sh
Copy code
npx prisma generate
Running the Application
Start the development server

sh
Copy code
npm run start:dev
Open your browser and navigate to http://localhost:3000.

Testing
To run the tests, use the following command:

sh
Copy code
npm run test
Project Structure
plaintext
Copy code
src/
├── auth/
│   ├── dto/
│   ├── guards/
│   ├── strategies/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.ts
├── users/
│   ├── dto/
│   ├── entities/
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── prisma/
│   ├── prisma.module.ts
│   ├── prisma.service.ts
├── app.module.ts
├── main.ts
└── ...
Configuration
The application can be configured using environment variables. The .env file contains the following variables:

plaintext
Copy code
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/authdb?schema=public"
JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="3600s"
Endpoints
Authentication
POST /auth/register - Register a new user
POST /auth/login - Log in and receive a JWT
Users
GET /users - Get all users (protected route)
GET /users/:id - Get user by ID (protected route)
Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
Distributed under the MIT License. See LICENSE for more information.
