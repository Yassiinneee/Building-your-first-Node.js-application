# 📦 Node.js Modules Checkpoint

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NPM](https://img.shields.io/badge/NPM-Package%20Manager-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

### **Exploring Built-in, Local, and Third-Party Modules in Node.js**

*A hands-on project demonstrating modular programming, file system operations, and email automation using Node.js.*

</div>

---

# 📖 Table of Contents

- Project Overview
- Objectives
- Technologies Used
- Project Structure
- Tasks Overview
- Installation
- Usage
- Task 1 – Built-in Module (File System)
- Task 2 – Local Module
- Task 3 – Third-Party Module (Nodemailer)
- Scripts
- Expected Output
- Learning Outcomes
- Best Practices
- Future Improvements
- Author
- License

---

# 🚀 Project Overview

This project demonstrates how to work with the three major categories of modules in Node.js:

- **Built-in Modules**
- **Local (Custom) Modules**
- **Third-Party Modules**

Each task showcases a different aspect of modular programming while following clean coding practices, reusable architecture, and proper project organization.

---

# 🎯 Objectives

The purpose of this checkpoint is to:

- Understand Node.js module architecture.
- Read files using the built-in File System module.
- Create reusable local modules.
- Export and import JavaScript modules.
- Install external packages using npm.
- Configure environment variables.
- Send emails using Nodemailer.
- Build a clean and maintainable Node.js application.

---

# 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript Runtime |
| JavaScript (ES6) | Programming Language |
| File System (fs) | Built-in Module |
| Nodemailer | Email Service |
| Dotenv | Environment Variables |
| npm | Package Manager |

---

# 📁 Project Structure

```text
NodeJS-Modules-Checkpoint/
│
├── node_modules/
│
├── message.txt
├── readFile.js
│
├── reportGenerator.js
├── main.js
│
├── sendEmail.js
│
├── .env
├── .gitignore
│
├── package.json
├── package-lock.json
│
└── README.md
```

---

# 📚 Tasks Overview

| Task | Description |
|------|-------------|
| Task 1 | Read a text file using the built-in `fs` module |
| Task 2 | Create and use a custom local module |
| Task 3 | Send an email using Nodemailer |

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/your-username/nodejs-modules-checkpoint.git
```

Move into the project folder

```bash
cd nodejs-modules-checkpoint
```

Install dependencies

```bash
npm install
```

---

# 🔧 Environment Variables

Create a `.env` file in the project root.

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_google_app_password
```

> **Important:** Never commit your `.env` file to GitHub.

---

# ▶️ Usage

Run each task individually.

### Task 1

```bash
node readFile.js
```

### Task 2

```bash
node main.js
```

### Task 3

```bash
node sendEmail.js
```

---

# 📄 Task 1 – Built-in Module (fs)

## Objective

Use Node.js's built-in File System module to read the contents of a text file.

### Features

- Reads a local text file.
- Displays its content in the terminal.
- Handles file reading errors using `try...catch`.

### File Used

```
message.txt
```

### Example Output

```text
📄 File Content

Hello from the file system module!
```

---

# 📊 Task 2 – Local Module

## Objective

Create a reusable module that generates a formatted student report.

### Features

- Calculates the average score.
- Determines Pass/Fail status.
- Returns a formatted report.
- Demonstrates module exporting/importing.

### Files

```
reportGenerator.js
main.js
```

### Example Output

```text
====================================

STUDENT REPORT

====================================

Student : John Doe

Scores : 12, 15, 9, 18, 13

Average : 13.40

Status : PASS

====================================
```

---

# 📧 Task 3 – Third-Party Module (Nodemailer)

## Objective

Send an email using the **Nodemailer** package.

### Features

- Uses Gmail SMTP.
- Reads credentials from environment variables.
- Sends an email successfully.
- Handles authentication and connection errors.

### Dependencies

```bash
npm install nodemailer dotenv
```

### Example Output

```text
Email sent successfully!

250 2.0.0 OK
```

---

# 📜 Available Scripts

| Command | Description |
|----------|-------------|
| `node readFile.js` | Execute Task 1 |
| `node main.js` | Execute Task 2 |
| `node sendEmail.js` | Execute Task 3 |

---

# 💡 Concepts Covered

- Node.js Modules
- Built-in Modules
- Local Modules
- Third-party Modules
- File Handling
- Synchronous Operations
- Modular Programming
- Environment Variables
- Email Automation
- Error Handling
- npm Package Management

---

# 📈 Learning Outcomes

After completing this project, I was able to:

- Understand Node.js module architecture.
- Use the built-in File System module.
- Create reusable JavaScript modules.
- Export and import custom functions.
- Install third-party libraries using npm.
- Configure environment variables with Dotenv.
- Send emails programmatically with Nodemailer.
- Apply clean code principles.
- Organize a scalable Node.js project.

---

# ✅ Best Practices Implemented

- Modular code organization
- Meaningful variable names
- Reusable functions
- Error handling with `try...catch`
- Environment variables for sensitive data
- Clear project architecture
- Well-documented source code
- Git-friendly project structure

---

# 🚀 Future Improvements

Potential enhancements include:

- Asynchronous file reading (`fs.promises`)
- HTML email templates
- Email attachments
- Multiple report formats (PDF, CSV)
- Logging system
- Unit testing with Jest
- Command-line arguments
- Interactive terminal interface

---

# 📸 Screenshots

Add screenshots of:

- Project structure
- Task 1 output
- Task 2 output
- Successful email sent
- Terminal execution

Example:

```
screenshots/
├── project-structure.png
├── task1-output.png
├── task2-output.png
├── email-sent.png
```

---

# 👨‍💻 Author

**Yassine Kalthoum**

Node.js Modules Checkpoint

Built with ❤️ using Node.js and JavaScript.

---

# 📄 License

This project was developed for educational purposes as part of a Node.js learning checkpoint.

You are free to study, modify, and extend this project for personal learning.