# Password Generator

This project is a simple password generator application built with ReactJS and Tailwind CSS.

## Description

It allows users to generate passwords with customizable length and the option to include numbers and special characters.
The generated password can be copied to the clipboard with a single click.

## Features

- Generate passwords with a customizable length (4 to 20 characters).
- Option to include numbers in the generated password.
- Option to include special characters in the generated password.
- Copy the generated password to the clipboard with a single click.
- Responsive design with a clean and modern UI.

## Technologies Used

- ReactJS
- Tailwind CSS (for styling)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ajeetkumarrauniyar/React-JS-Minor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd random-password-generator
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

- Open the application in your web browser.
- Adjust the password length using the slider.
- Check the boxes to include numbers and/or special characters in the password.
- The generated password will be displayed in the input field.
- Click the "Copy" button to copy the generated password to your clipboard.

## Code Explanation

### Components

- `App`: The main component that handles the state and logic for the password generator.

### State Variables

- `length`: The length of the generated password (default is 8).
- `numberAllowed`: A boolean indicating whether numbers should be included in the password.
- `characterAllowed`: A boolean indicating whether special characters should be included in the password.
- `password`: The generated password.

### Functions

- `passwordGenerator`: Generates a password based on the current state (length, numberAllowed, characterAllowed).
- `copyPasswordToClipboard`: Copies the generated password to the clipboard.

### Hooks

- `useState`: Manages the state variables.
- `useCallback`: Memoizes the passwordGenerator and copyPasswordToClipboard functions to prevent unnecessary re-renders.
- `useEffect`: Automatically generates a new password whenever the length, numberAllowed, or characterAllowed state changes.
- `useRef`: Provides a reference to the password input field for copying the password to the clipboard.
