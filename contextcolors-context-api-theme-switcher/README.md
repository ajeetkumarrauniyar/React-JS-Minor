# ContextColors: Context API Theme Switcher

## Description

This React application provides a theme toggle feature with a product card display. The theme can be switched between light and dark modes using a toggle button.

# Features

- Theme toggle between light and dark modes
- Product card display with image, name, price, and "Add to Cart" button
- Responsive design

## Project Structure

`````plaintext
contextcolors-context-api-theme-switcher/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── ThemeButton.jsx
│   ├── contexts/
│   │   └── theme.js
│   ├── App.jsx
│   └── index.js
└──package.json

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ajeetkumarrauniyar/React-JS-Minor.git
    ````

2. Navigate to the project directory:

   ```bash
   cd contextcolors-context-api-theme-switcher
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```
## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173`.

## Use Cases

1. Theme Toggle for a Website:
    - Easily integrate theme switching functionality to allow users to switch between light and dark modes.

2. E-commerce Product Display:
    - Display product cards with images, names, prices, and an "Add to Cart" button, making it suitable for any e-commerce site.

3. Responsive Design Implementation:
    - Utilize responsive design principles to ensure the application looks good on all device sizes.

## Components

### App

The `App` component sets up the theme context and provides the theme switching functionality.

### ThemeProvider

The `ThemeProvider` component provides the theme context to its children.

### Card

The `Card` component displays a product with an image, name, price, and an "Add to Cart" button.

### ThemeButton

The `ThemeButton` component provides a toggle switch to change the theme between light and dark modes.

## Context

### theme.js

This file defines the `ThemeContext` and `ThemeProvider` for managing theme state.

## Custom Hook

### useTheme

The `useTheme` custom hook provides easy access to the ThemeContext.
`````

This project aims to provide a simple yet comprehensive example of using the Context API in a React application.
Happy coding!