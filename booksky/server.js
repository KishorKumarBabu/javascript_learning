const express = require("express");
const fs = require("fs");
const XLSX = require("xlsx");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const filePath = "D:/signup_data.xlsx";

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/signup", (req, res) => {
    const newEntry = [req.body.name, req.body.email, req.body.password];
    let workbook;
    let worksheet;

    if (fs.existsSync(filePath)) {
        // Load existing workbook
        workbook = XLSX.readFile(filePath);

        // Read existing sheet
        worksheet = workbook.Sheets["Signups"];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        data.push(newEntry);

        // Replace sheet content
        const updatedSheet = XLSX.utils.aoa_to_sheet(data);
        workbook.Sheets["Signups"] = updatedSheet; // ✅ Just update, don't append again
    } else {
        // Create new workbook and sheet
        workbook = XLSX.utils.book_new();
        const data = [["Name", "Email", "Password"], newEntry];
        worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Signups");
    }

    XLSX.writeFile(workbook, filePath);
    res.send("✅ Signup saved to Excel!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("❌ No signup data found.");
    }

    const workbook = XLSX.readFile(filePath);
    const worksheet = workbook.Sheets["Signups"];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Skip header row and check for match
    const found = data.slice(1).find(row => row[1] === email && row[2] === password);

    if (found) {
        res.send("✅ Login Successful");
    } else {
        res.status(401).send("❌ Invalid Email or Password");
    }
});
