module.exports = {
  connection: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 3306,
      database: process.env.DB_NAME || "strapi_app",
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "your_password",
      ssl: false,
    },
  },
};
