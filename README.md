# Unhandled Error when Serving Non-Existent Static File in Express.js

This repository demonstrates a common but easily overlooked error in Express.js applications:  the lack of proper error handling when attempting to serve a static file that does not exist.  The default behavior throws a cryptic error, which is not ideal for a production environment.

The `bug.js` file shows the problematic code. The `bugSolution.js` provides a corrected version that gracefully handles the error.

## Bug
The `res.sendFile()` method in Express.js throws an error if the specified file path is incorrect or the file doesn't exist.  This error is not caught and results in a server crash or a poorly formatted error message to the client.

## Solution
The solution involves adding error handling using the `err` callback in `res.sendFile()`.