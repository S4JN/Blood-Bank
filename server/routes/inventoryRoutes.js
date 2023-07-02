const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { createInventory, getRecords } = require("../controllers/inventoryController");

const router = express.Router();

router.post('/create-inventory', authMiddleware, createInventory);

//GET all blood records

router.get("/blood-records", authMiddleware, getRecords);

module.exports = router