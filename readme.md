# Authentication App

This is a basic authentication application built using NestJS, Prisma ORM, PostgreSQL, and Docker. This project aims to demonstrate how to set up user authentication with NestJS and Prisma, using PostgreSQL as the database and Docker for containerization.

## Features

- User registration
- User login
- JWT authentication
- CRUD operations for user management
- Secure password hashing

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/) (if not using Docker)

## Getting Started

### Clone the Repository

    ```bash
    git clone https://github.com/your-username/auth-nestjs-jwt.git
    cd auth-nestjs-jwt
    ```

### Setting Up the Database with Docker
Create a docker-compose.yml file in the project root with the following content:

    ```yaml
    version: '3.8'
    services:
    postgres:
        image: postgres:13
        container_name: auth_postgres
        restart: always
        environment:
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: postgres
        POSTGRES_DB: auth_db
        ports:
        - '5432:5432'
        volumes:
        - postgres_data:/var/lib/postgresql/data

    volumes:
    postgres_data:
    ```  
Start the PostgreSQL container:

    ```bash
    docker-compose up -d
    ```    

### Install Dependencies
Install the project dependencies:

    ```bash
    npm install
    ```

### Configure Prisma
Generate the Prisma client:

    ```bash
    npx prisma generate
    ```

Run database migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

### Set Up Environment Variables
Create a .env file in the project root with the following content:

    ```env
    DATABASE_URL="postgresql://postgres:postgres@localhost:5432/auth_db?schema=public"
    JWT_SECRET="your_jwt_secret"
    ```

### Start the Application
Start the NestJS application:

    ```bash
    npm run start:dev
    ```

### Running Tests
To run the tests, use the following command:

    ```bash
    npm run test
    ```

### API Endpoints
- POST /auth/register - Register a new user
- POST /auth/login - Authenticate a user and receive a JWT
- GET /users - Get all users (protected)
- GET /users/:id - Get user by ID (protected)
- PUT /users/:id - Update user by ID (protected)
- DELETE /users/:id - Delete user by ID (protected)

### Project Structure
    ```arduino
    src/
    ├── auth/
    │   ├── auth.controller.ts
    │   ├── auth.module.ts
    │   ├── auth.service.ts
    │   ├── dto/
    │   ├── guards/
    │   └── strategies/
    ├── users/
    │   ├── users.controller.ts
    │   ├── users.module.ts
    │   ├── users.service.ts
    │   ├── dto/
    │   └── entities/
    ├── prisma/
    │   ├── prisma.module.ts
    │   └── prisma.service.ts
    ├── main.ts
    └── app.module.ts
    ```

### Contributing
- Fork the repository
- Create a new branch (git checkout -b feature/your-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin feature/your-feature)
- Create a new Pull Request

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Contact
If you have any questions, feel free to contact me at your-email@example.com.

