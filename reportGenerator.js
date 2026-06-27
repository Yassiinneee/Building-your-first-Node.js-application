/**
 * --------------------------------------------
 * Report Generator Module
 * --------------------------------------------
 */

function generateReport(name, scores) {

    if (!Array.isArray(scores) || scores.length === 0) {
        return "Invalid scores.";
    }

    const total = scores.reduce((sum, score) => sum + score, 0);

    const average = total / scores.length;

    const status = average >= 10 ? "PASS ✅" : "FAIL ❌";

    return `
====================================
        STUDENT REPORT
====================================

Student : ${name}

Scores  : ${scores.join(", ")}

Average : ${average.toFixed(2)}

Status  : ${status}

====================================
`;

}

module.exports = generateReport;