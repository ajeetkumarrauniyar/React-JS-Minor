# Admission Form

A comprehensive student admission management system built with React, featuring user authentication, form validation, and student data management capabilities.

## Overview

The Admission Form project is a web application designed to streamline the student admission process. It provides an intuitive interface for student registration, admin authentication, and student data management. Built with modern web technologies, this application offers a responsive design, secure authentication, and efficient data handling.

## Features

- **User Authentication**: Secure admin login system using Appwrite authentication service
- **Student Registration**: Comprehensive form with validation for collecting student information
- **Student Management**: View, search, and manage all registered students
- **Pagination**: Efficient navigation through student records
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Private Routes**: Protected routes for authenticated users only
- **Search Functionality**: Filter and find specific student records
- **Print-friendly Views**: Optimized layouts for printing student information

## Technologies Used

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router DOM 6.26.0
- **Authentication**: Appwrite 15.0.0
- **Styling**: Tailwind CSS 3.4.9
- **Build Tool**: Vite 4.3.1
- **State Management**: React Context API
- **Deployment**: Vercel

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ajeetkumarrauniyar/React-JS-Minor.git
   cd React-JS-Minor/admission-form
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory
   - Add your Appwrite configuration:
     ```
     VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
     VITE_APPWRITE_PROJECT_ID=your_project_id
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

### Admin Login

1. Navigate to the login page
2. Enter your admin credentials
3. Upon successful authentication, you'll be redirected to the dashboard

### Student Registration

1. Fill out the student registration form with required information
2. Submit the form to register a new student
3. Receive confirmation upon successful registration

### Managing Students

1. View all registered students in the dashboard
2. Use the search functionality to find specific students
3. Navigate through pages using the pagination controls
4. Select a student to view detailed information

## Project Structure

```
admission-form/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   │   ├── AdminLogin.jsx
│   │   ├── GetAllStudents.jsx
│   │   ├── Pagination.jsx
│   │   ├── PrivateRoute.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── Sidebar.jsx
│   ├── config/          # Configuration files
│   ├── contexts/        # React context providers
│   │   └── AuthContext.jsx
│   ├── services/        # API and service functions
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   ├── main.jsx         # Application entry point
│   ├── print.css        # Print-specific styles
│   └── states.js        # State management
├── .gitignore
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── vercel.json          # Vercel deployment configuration
└── vite.config.js       # Vite configuration
```

## Deployment

The application is configured for deployment on Vercel. The `vercel.json` file in the root directory contains the necessary configuration for proper routing with React Router.

To deploy to Vercel:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the application:
   ```bash
   vercel
   ```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Appwrite](https://appwrite.io/)
- [React Router](https://reactrouter.com/)
