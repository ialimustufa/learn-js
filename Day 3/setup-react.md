# Instructions for React "Hello World"

## TODO

1. Install Node.js and npm.
2. Install a code editor (e.g., Visual Studio Code).
3. Create a new React application using Create React App.
4. Modify the `App` component to display "Hello, World!".
5. Start the development server to see your React application in action.

## Step 1: Install Node.js and npm

Node.js is a JavaScript runtime that allows you to run JavaScript on the server-side, and npm (Node Package Manager) is a package manager for JavaScript libraries and tools.

### Install Node.js and npm

1. **Download and Install Node.js:**
   - Go to the [official Node.js website](https://nodejs.org/).
   - Download the LTS (Long-Term Support) version suitable for your operating system.
   - Run the installer and follow the instructions to complete the installation.

2. **Verify Installation:**
   - Open your terminal or command prompt.
   - Run the following commands to check if Node.js and npm are installed correctly:
     ```sh
     node -v
     npm -v
     ```
   - You should see the version numbers for Node.js and npm.

## Step 2: Install a Code Editor

It's recommended to use a modern code editor that supports JavaScript and React development. One popular choice is Visual Studio Code (VS Code).

### Install VS Code

1. **Download and Install VS Code:**
   - Go to the [Visual Studio Code website](https://code.visualstudio.com/).
   - Download the installer suitable for your operating system.
   - Run the installer and follow the instructions to complete the installation.

## Step 3: Create a New React Project

1. **Open Terminal or Command Prompt:**
   - Open your terminal or command prompt.

2. **Navigate to Your Projects Directory:**
   - Use the `cd` command to navigate to the directory where you want to create your React project. For example:
     ```sh
     cd path/to/your/projects/directory
     ```

3. **Create a New React App:**
   - Run the following command to create a new React application using Create React App:
     ```sh
     npx create-react-app hello-world-react
     ```
   - This command will create a new directory called `hello-world-react` with all the necessary files and dependencies for a React project.

4. **Navigate to the Project Directory:**
   - Change to the newly created project directory:
     ```sh
     cd hello-world-react
     ```

## Step 4: Verify Project Structure

![Project Structure](/file-structure.png)

## Step 5: Modify the App Component to Display "Hello World"

1. **Open `src/App.js` in your code editor:**
2. **Replace the existing code with the following code:**

    ```jsx
    // src/App.js
    import React from 'react';
    import './App.css';

    function App() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Hello, World!</h1>
                </header>
            </div>
        );
    }

    export default App;
    ```

    In this example:
    - A functional component `App` is created, which returns a JSX element that displays "Hello, World!".

## Step 6: Start the Development Server

1. **Start the Development Server:**
   - Run the following command to start the development server:
     ```sh
     npm start
     ```
   - This command will start the development server and open your new React application in the default web browser. Any changes you make to the source files will be reflected in real-time.

## Optional - Install React DevTools

[React Developer Tools Installation](https://react.dev/learn/react-developer-tools)