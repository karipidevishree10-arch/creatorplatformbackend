Problem Statement
You are building the backend foundation for a Creator’s Platform.

A Creator’s Platform allows users (creators) to:

Register on the platform
Manage their profile information
Be stored securely in a database
Be accessed through REST API endpoints
In this assignment, you will implement a Node.js + Express backend connected to MongoDB, following a clean folder structure and industry best practices.

This backend will later be connected to a React frontend in upcoming lessons.

Objective
Build a functional backend that:

Connects to MongoDB using Mongoose
Stores user (creator) data securely
Provides REST APIs for managing users
Follows proper project structure
Is submitted via GitHub Pull Request with a video demo
Tasks to Implement
1️⃣ Database Configuration
Connect MongoDB using Mongoose
Use environment variables for database connection
Handle connection success and failure properly
2️⃣ User Model
Create a User model with the following fields:

name (required, min length)
email (required, unique, valid email)
password (required, hashed, not returned in responses)
3️⃣ Controllers (Business Logic)
Implement the following controller functions:

Register a user
Get all users
Get a user by ID
Update a user
Delete a user
Passwords must be hashed using bcrypt.

4️⃣ Routes
Set up API routes for users:

POST /api/users/register
GET /api/users
GET /api/users/:id
PUT /api/users/:id
DELETE /api/users/:id
5️⃣ Server Integration
Connect database in server.js
Register user routes
Ensure server starts without errors
6️⃣ API Testing
Test all endpoints using Postman or REST Client
Ensure passwords are not returned in API responses
Handle basic error cases (missing fields, duplicate email, invalid ID)
Instructions
Use JavaScript (Node.js + Express)
Use MongoDB with Mongoose
Use bcrypt for password hashing
Do NOT commit .env files
Follow the folder structure shown above
Code must run without errors
Submission Guidelines
1️⃣ GitHub Repository
Your GitHub repository must be public

Push all backend code to GitHub

Do NOT include:

.env files
node_modules/
2️⃣ Pull Request (PR)
Create a new branch:

git checkout -b feature/backend-foundation
Push your changes and raise a Pull Request

PR must include:

Clear title
Brief description of what you implemented
Link to your video demo
3️⃣ Video Demonstration
Record a 3–5 minute video

Upload the video to Google Drive

Set access to: “Anyone with the link can edit”

The video must show:

Server starting successfully
API testing (register, fetch user)
One error case
Database showing hashed password
4️⃣ Final Submission
Submit the following:

✅ GitHub repository link (public)
✅ Pull Request link
✅ Google Drive video link (with correct access)
Evaluation Rubrics Overview
Pull Request Rubric (10 Marks)
Backend server & project structure
Database connection
User model & validations
Routes & controllers
API functionality & error handling
PR quality & code cleanliness
Video Demo Rubric
Server startup demonstration
Folder & code walkthrough
User model & password hashing explanation
API testing demo
Database verification
Important Notes
Repository must be public
Video must be accessible
Passwords must be hashed
APIs must work
Partial implementations will receive partial marks
