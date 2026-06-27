/**
 * --------------------------------------------
 * Task 1
 * Reading a file using Node.js File System Module
 * --------------------------------------------
 */

const fs = require("fs");

try {

    const data = fs.readFileSync("message.txt", "utf8");

    console.log("📄 File Content:");
    console.log("------------------------");
    console.log(data);
    console.log("------------------------");

} catch (error) {

    console.error("❌ Error reading the file.");
    console.error(error.message);

}