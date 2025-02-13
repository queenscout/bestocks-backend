const express = require("express");
const { Beer, User } = require("./models");
const router = express.Router();

// Get beer prices
router.get("/prices", async (req, res) => {
    try {
        const beers = await Beer.find();
        res.json(beers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch beer prices" });
    }
});

// User login (IP-based)
router.post("/login", async (req, res) => {
    const { username, ip } = req.body;

    try {
        let existingUser = await User.findOne({ username });

        if (existingUser && existingUser.ip !== ip) {
            return res.status(400).json({ error: "Username already taken!" });
        }

        if (!existingUser) {
            await User.create({ username, ip });
        }

        res.json({ success: true, username });
    } catch (error) {
        res.status(500).json({ error: "Login failed" });
    }
});

module.exports = router;
