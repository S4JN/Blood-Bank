const express = require("express");
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const morgan = require("morgan");
const cors = require("cors");
const app= express();
const connectDB = require("./config/db.js");

//dotenv config
require("dotenv").config();

//middlewares
app.use(express.json())
app.use(cors());
app.use(morgan("dev"));


app.use("/api/v1/test",testRoutes);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/inventory",inventoryRoutes);

//made using mvc pattern 

const PORT = process.env.PORT || 8000;

//both the below methods are correct 

// connectDB();
// app.listen(PORT,()=>{
//     console.log(`Server runnng on Port ${PORT}`);
// })

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to the database:", error));