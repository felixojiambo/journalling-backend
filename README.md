
# Personal Journaling App - Backend

This is the backend service for the Personal Journaling App, built with Node.js, Express, and PostgreSQL.

## Features

- User registration and authentication (JWT)
- CRUD operations for journal entries
- Categorization of entries
- Summary data for given periods
- Secure endpoints accessible only by authenticated users

## Requirements

- Node.js
- PostgreSQL

## Installation

### 1. Clone the repository:
   ```bash
   git clone https://github.com/felixojiamboe/journaling-backend.git
   cd journaling-backend
   ```

### 2. Install dependencies:
   ```bash
   npm install
   ```

### 3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```env
   DATABASE_URL=postgres://user:password@localhost:5432/journaling
   JWT_SECRET=your_jwt_secret
   ```

### 4. Set up the database:
   Ensure PostgreSQL is running, then run the migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```

### 5. Start the server:
   ```bash
   npm start
   ```

## API Documentation

The API documentation is available at `/api-docs` once the server is running.

## Endpoints

### Auth

- `POST /api/register` - Register a new user
  - Request body: 
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```

- `POST /api/login` - Login a user and receive a JWT
  - Request body: 
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - Response: 
    ```json
    {
      "token": "jwt_token"
    }
    ```

### Profile

- `GET /api/profile` - Get user profile
  - Headers: 
    ```json
    {
      "Authorization": "Bearer jwt_token"
    }
    ```

- `PUT /api/profile` - Update user profile
  - Request body: 
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - Headers: 
    ```json
    {
      "Authorization": "Bearer jwt_token"
    }
    ```

### Journal Entries

- `POST /api/journal` - Create a new journal entry
  - Request body: 
    ```json
    {
      "title": "string",
      "content": "string",
      "category": "string",
      "date": "YYYY-MM-DD"
    }
    ```
  - Headers: 
    ```json
    {
      "Authorization": "Bearer jwt_token"
    }
    ```

- `GET /api/journal` - Get all journal entries
  - Headers: 
    ```json
    {
      "Authorization": "Bearer jwt_token"
    }
    ```

- `GET /api/journal/:id` - Get a specific journal entry
  - Headers: 
    ```json
    {
      "Authorization": "Bearer jwt_token"
    }
    ```

- `PUT /api/journal/:id` - Update a journal entry
  - Request body: 
    ```json
    {
      "title": "string",
      "content": "string",
      "category": "string",
      "date": "YYYY-MM-DD"
    }
    ```
  - Headers: 
    ```json
    {
      "Authorization": "Bearer jwt_token"
    }
    ```

- `DELETE /api/journal/:id` - Delete a journal entry
  - Headers: 
    ```json
    {
      "Authorization": "Bearer jwt_token"
    }
    ```

### Summary

- `GET /api/summary` - Get a summary of journal entries over a selected period
  - Request query parameters: 
    - `period` (optional): 'daily', 'weekly', 'monthly'
  - Headers: 
    ```json
    {
      "Authorization": "Bearer jwt_token"
    }
    ```

## Project Structure

```plaintext
.
├── src
│   ├── controllers      # Route handlers
│   ├── middleware       # Authentication middleware
│   ├── models           # Database models
│   ├── routes           # API routes
│   ├── services         # Business logic
│   ├── utils            # Utility functions
│   └── app.js           # Express app setup
├── .env                 # Environment variables
├── package.json         # Project dependencies
├── README.md            # Project documentation
└── ...
```

## License

This project is licensed under the MIT License.
