const express = require("express");

require("dotenv").config();

const { createStrapi } = require("@strapi/strapi");

const app = express();

// Example: custom Express route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express + Strapi v5!" });
});

const start = async () => {
  try {
    // Create Strapi instance
    const strapiApp = await createStrapi().load();

    // Start Strapi (admin panel + content API)
    await strapiApp.start();

    // Start your Express server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Express server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error starting app:", err);
  }
};

start();
