import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { PORT } from "./utils/config.js";

const app = express();

// Native Express route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express (ESM)!" });
});

// Proxy Strapi Admin + API
app.use(
  ["/admin", "/api", "/uploads"],
  createProxyMiddleware({
    target: "http://localhost:1337", // Strapi server
    changeOrigin: true,
  })
);


app.listen(PORT, () => {
  console.log(`🚀 Express server running at http://localhost:${PORT}`);
  console.log(`✅ Strapi Admin available at http://localhost:${PORT}/admin`);
  console.log(`✅ Strapi API available at http://localhost:${PORT}/api`);
});
