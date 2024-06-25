# ContextUser: Context API Demo App

This project is a simple demonstration of React's Context API. It includes a basic implementation of user authentication forms (Login and Signup) and displays user information on a profile page. The primary goal of this mini-project is to provide a practical understanding of how the Context API can be used to manage state across a React application.

## Introduction

The ContextUser: Context API Demo App is designed to help developers understand how to use the Context API in a React application. It consists of three main components:

- `Login`: A form to authenticate users.
- `Signup`: A form to register new users.
- `Profile`: A page to display user information.

The state management for the user data is handled using the Context API, which allows the user information to be accessible throughout the application without the need for `prop drilling`.

## Features

- User authentication with Login and Signup forms.
- Display of user information on the Profile page.
- Use of Context API for state management.
- Simple and clean code structure for easy understanding and modification.

## Project Structure

```javascript
contextuser-context-api/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   └── Signup.jsx
│   │
│   ├── context/
│   │   ├── UserContext.js
│   │   └── UserContextProvider.jsx
│   │
│   ├── App.jsx
│   └── index.js
│
└── package.json
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ajeetkumarrauniyar/React-JS-Minor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd contextuser-context-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application should now be running on http://localhost:5173.

## Usage

Once the application is running, you can use the following features:

- Login: Enter a username and password to log in. The user information will be stored in the context.
- Signup: Register a new user by providing first name, last name, email, and password. The user information will be stored in the context.
- Profile: View the profile page to see the logged-in user's information.

This project aims to provide a simple yet comprehensive example of using the Context API in a React application.
Happy coding!
