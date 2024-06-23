# Authentication Application with NestJS, PostgreSQL, and Prisma

This project demonstrates how to create an authentication system using NestJS, PostgreSQL, and Prisma. Following the guidelines provided in the official NestJS documentation for authentication, this application covers user registration, login, and protected routes.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these simple steps.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (for running PostgreSQL)

## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/your-username/auth-nestjs-jwt.git
   cd auth-nestjs-jwt
   
2. Install NPM packages

   ```sh
   npm install
   
3. Start PostgreSQL using Docker
   ```sh
   docker run --name nestjs-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=authdb -p 5432:5432 -d postgres

4. Set up Prisma
   ```sh
   npx prisma init

5. Update the .env file with your database connection string
   ```plaintext
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/authdb?schema=public"

6. Run Prisma migrations
   ```sh
   npx prisma migrate dev --name init

7. Generate Prisma client
   ```sh
   npx prisma generate

## Running the Application
1. Start the development server
   ```sh
   npm run start:dev

2. Open your browser and navigate to http://localhost:3000.

## Testing
To run the tests, use the following command:
   ```sh
   npm run test

# Project Structure
   ```plaintext
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

## Configuration
The application can be configured using environment variables. The .env file contains the following variables:

   ```plaintext
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/authdb?schema=public"
   JWT_SECRET="your_jwt_secret"
   JWT_EXPIRES_IN="3600s"

## Endpoints
### Authentication
- POST /auth/register - Register a new user
- POST /auth/login - Log in and receive a JWT

### Users
- GET /users - Get all users (protected route)
- GET /users/:id - Get user by ID (protected route)

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## License
Distributed under the MIT License. See LICENSE for more information.
