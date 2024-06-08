# Setting Up Your IDE (Visual Studio Code) on Windows

**Welcome, everyone! Before we dive into learning JavaScript, we need to set up our development environment. We'll be using Visual Studio Code (VS Code) as our code editor. Follow these steps to get everything ready:**

## Step 1: Download Visual Studio Code

1. Open your web browser and go to the [Visual Studio Code website](https://code.visualstudio.com/).
2. Click on the big blue button that says "Download for Windows". This will start downloading the installer.

## Step 2: Install Visual Studio Code

1. Once the download is complete, locate the downloaded file (it should be named something like `VSCodeSetup-x.x.x.exe` where `x.x.x` is the version number).
2. Double-click the file to start the installation process.
3. You’ll see a setup wizard. Click "Next" to proceed through the steps.
4. Accept the license agreement and click "Next".
5. Choose the destination folder (the default location is usually fine) and click "Next".
6. When you reach the "Select Additional Tasks" step, make sure to check the following options:
   - "Create a desktop icon"
   - "Add to PATH" (this is very important for running VS Code from the command line)
7. Click "Next" and then "Install". The installation process will take a few moments.

## Step 3: Launch Visual Studio Code

1. Once the installation is complete, make sure the option "Launch Visual Studio Code" is checked and click "Finish". VS Code will open.
2. If it doesn’t open automatically, you can start it from the desktop icon or search for "Visual Studio Code" in the Start menu.

## Step 4: Install Essential Extensions

1. When VS Code opens, you’ll see a welcome page. On the left sidebar, click on the Extensions icon (it looks like a square with four squares inside).
2. In the search bar at the top of the sidebar, type "JavaScript (ES6) code snippets". Click "Install" on the first result by charalampos karypidis.
3. Next, search for "Live Server" and install it. This extension allows you to launch a local development server with live reload feature for static & dynamic pages.
4. Optionally, you can install "Prettier - Code formatter" to help format your code.

## Step 5: Setting Up Node.js

To run JavaScript outside the browser, we need Node.js.

1. Open your web browser and go to the [Node.js website](https://nodejs.org/).
2. Click on the green button that says "LTS". This stands for Long Term Support and is the recommended version for most users.
3. Once the download is complete, locate the downloaded file and double-click it to start the installation.
4. Follow the installation steps. Make sure to check the box that says "Add to PATH" during installation.
5. After installation, open a command prompt by pressing `Win + R`, type `cmd`, and press Enter.
6. In the command prompt, type `node -v` and press Enter. You should see the version number of Node.js, which confirms it's installed correctly.
7. Also, type `npm -v` to check if npm (Node Package Manager) is installed. It should show a version number.

## Step 6: Create Your First JavaScript File

1. In VS Code, click on `File` > `Open Folder...`.
2. Select a location on your computer where you want to save your projects (e.g., `C:\Users\YourSystemName\Documents\jstoreact`). Click "Select Folder".
3. Now, click on `File` > `New File`. Name the file `index.html` and press Enter.
4. Inside `index.html`, type the following basic HTML structure:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My First JavaScript Project</title>
    </head>
    <body>
      <h1>Hello, JavaScript!</h1>
      <script src="script.js"></script>
    </body>
    </html>
    ```

5. Now, create another new file in the same folder and name it `script.js`.
6. Inside `script.js`, type the following code:

    ```javascript
    console.log('Hello, JavaScript!');
    ```

7. Save both files.

## Step 7: Run Your First JavaScript Code

1. In the VS Code sidebar, right-click on `index.html` and select `Open with Live Server`. This will open your HTML file in your default web browser.
2. Open the Developer Tools in your browser (you can do this by right-clicking on the page and selecting "Inspect" or pressing `Ctrl + Shift + I`).
3. Go to the `Console` tab in Developer Tools. You should see the message `Hello, JavaScript!` printed there.

Congratulations! You have successfully set up your development environment and run your first JavaScript code. Now, you’re ready to start coding!

---

## Next Steps: Introduction to JavaScript (Theory)

Now that we have our environment set up, let’s move on to learning the basics of JavaScript! We'll cover the following topics in this session:
1. Overview of JavaScript
2. Basic Syntax and Constructs
3. Variables, Data Types, and Operators

---

**Let's get started! If you have any questions during the setup or any step isn't clear, feel free to ask for help.**