import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

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

const PORT = process.env.EXP_PORT || 3300;
app.listen(PORT, () => {
  console.log(`🚀 Express server running at http://localhost:${PORT}`);
  console.log(`✅ Strapi Admin available at http://localhost:${PORT}/admin`);
  console.log(`✅ Strapi API available at http://localhost:${PORT}/api`);
});
