const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./database");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB();
app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Bestocks Backend is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
