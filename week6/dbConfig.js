module.exports = {
    user: "booksapi_user", // Replace with your SQL Server login username
    password: "hellocher119!", // Replace with your SQL Server login password
    server: "localhost",
    database: "week6",
    trustServerCertificate: true,
    options: {
      port: 1433, // Default SQL Server port
      connectionTimeout: 60000, // Connection timeout in milliseconds
    },
  };