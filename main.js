/**
 * --------------------------------------------
 * Main Application
 * --------------------------------------------
 */

const generateReport = require("./reportGenerator");

const studentName = "John Doe";

const studentScores = [12, 15, 9, 18, 13];

const report = generateReport(studentName, studentScores);

console.log(report);