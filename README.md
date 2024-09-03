# Issue Tracker

A full-stack application for tracking issues, built with Node.js, Express, SQLite, React, and TypeScript.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the API](#running-the-api)
   - [Running the Client](#running-the-client)
5. [API Documentation](#api-documentation)
   - [Endpoints](#endpoints)
   - [Sample Requests](#sample-requests)
6. [Client Usage](#client-usage)
7. [Testing](#testing)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

## Overview

This project is a simple Issue Tracker that allows users to manage issues with basic CRUD (Create, Read, Update, Delete) operations. It includes a RESTful API built with Node.js and Express, and a client-side application built with React and TypeScript.

## Features

- **Create** issues with a title and description.
- **Read** issues from the database.
- **Update** issue titles and descriptions inline.
- **Delete** issues.
- Real-time updates to the UI after editing issues.
- Mandatory fields for issue title and description.
- Responsive design.

## Technologies

### Backend (API)

- Node.js
- Express.js
- TypeScript

### Frontend (Client)

- React
- TypeScript
- CSS (for styling)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14.x or higher)
- [npm](https://www.npmjs.com/get-npm) (v6.x or higher)

### Installation

Clone the repository:

```bash
git clone https://github.com/kambereBr/issue-tracker.git
cd issue-tracker
```

### Running the API
- Navigate to the api directory:
```bash
cd api
```

- Install dependencies:
```bash
npm install
```
- Start the server:

```bash
npx ts-node src/index.ts
```

The server should now be running at `http://localhost:4000`

### Running the Client
- Open a new terminal window and navigate to the `client` directory:
```bash
cd client
```

- Install dependencies:
```bash
npm install
```

- Start the React development server:
```bash
npm start
```
The client should now be running at `http://localhost:3000`

## API Documentation

### Endpoints

- GET `/issues` - Retrieve all issues.
- POST `/issues` - Create a new issue.
- PUT `/issues/:id` - Update an existing issue.
- DELETE `/issues/:id` - Delete an issue

### Sample Requests
- Get All Issues
```bash
curl -X GET http://localhost:4000/issues
```

- Create a New Issue
```bash
curl -X POST http://localhost:4000/issues \
-H "Content-Type: application/json" \
-d '{"title": "New Issue", "description": "Issue description"}'
```

- Update an Issue
```bash
curl -X PUT http://localhost:4000/issues/1 \
-H "Content-Type: application/json" \
-d '{"title": "Updated Issue", "description": "Updated description"}'
```

- Delete an Issue
```bash
curl -X DELETE http://localhost:4000/issues/1
```

## Client Usage
The client-side application allows users to interact with the Issue Tracker visually. `Add a New Issue`, `Edit an Issue`, and `Delete an Issue`

## Testing
### Backend Tests
The backend includes unit tests for the API endpoints. To run the tests:

- Ensure you are in the `api` directory:
```bash
cd api
```

- Run the tests:
```bash
npx jest
```

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcomed.

## License
This project is [MIT](LICENSE) licensed.

## Contact
- GitHub: [@kambereBr](https://github.com/kambereBr)
- Twitter: [@kambereBr](https://twitter.com/kambereBr)
- LinkedIn: [bruno kambere](https://www.linkedin.com/in/bruno-kambere/)