import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


// ================= HOME =================

app.get("/", (req, res) => {
    res.json({
        message: "Booking Backend is running"
    });
});


// ================= REGISTER =================

app.post("/api/auth/register", (req, res) => {

    const { fullName, email, password } = req.body;

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);

    res.json({
        message: "Registration successful"
    });

});


// ================= SIGN IN =================

app.post("/api/auth/login", (req, res) => {

    const { email, password } = req.body;

    console.log("Email:", email);
    console.log("Password:", password);

    res.json({
        message: "Login successful"
    });

});


// ================= SERVER =================

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});