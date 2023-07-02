const Inventory = require("../models/inventorySchema");
const User = require("../models/userSchema");
const mongoose = require("mongoose");


const createInventory = async (req, res) => {
    try {
        const { email, inventoryType } = req.body;
        //valadition
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User Not found in inventory controller");
        }
        if (inventoryType === "in" && user.role !== "donar") {
            throw new Error("Not a donar account");
        }
        if (inventoryType === "out" && user.role !== "hospital") {
            throw new Error("Not a hospital account");
        }
        const inventory = new Inventory(req.body);
        await inventory.save();
        return res.status(201).send({
            success: true,
            message: "Inventory item added",
            inventory
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in creating inventory",
            error
        })
    }
}

//changes in here
const getRecords = async (req, res) => {
    try {
        const inventory = await Inventory.find({})
            .populate("donar")
            .populate("hospital")
            .sort({ createdAt: -1 });;
        return res.status(200).send({
            success: true,
            message: req.body.userId,
            inventory
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in fetching the records",
            error
        });
    }
}

module.exports = { createInventory, getRecords };