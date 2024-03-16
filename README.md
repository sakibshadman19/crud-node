# Node.js CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js and Express.js. It provides endpoints to manage user data including username and password.

## Installation

1. Clone the repository: git clone https://github.com/sakibshadman19/crud-node.git

2. Install dependencies: npm install

3. Create a `.env` file and specify the environment variables: PORT=3000

4. Start the server: npm start



The server will start running on http://localhost:3000 by default.

## API Endpoints

- `POST /users`: Create a new user. Requires a JSON object with `username` and `password` fields in the request body.
- `GET /users`: Get all users.
- `GET /users/:id`: Get a specific user by ID.
- `PUT /users/:id`: Update a user's username and/or password by ID. Requires a JSON object with `username` and/or `password` fields in the request body.
- `DELETE /users/:id`: Delete a user by ID.

## Dependencies

- [Express.js](https://expressjs.com/) : Web framework for Node.js
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) : Library for hashing passwords






