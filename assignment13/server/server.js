import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Product from "../models/Product.js";

const uri =
    "mongodb+srv://testuser:%21%21%40%40%23%23%24%24%25%25ttrreewwqq@nodeproject.dgev9.mongodb.net/?retryWrites=true&w=majority&appName=NodeProject";
const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(uri, clientOptions)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Get all products
app.get("/product/get", async (_req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products", err });
    }
});

app.post("/product/create", async (req, res) => {
    try {
        const { id, product } = req.body;
        const newProduct = new Product({ id, product });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: "Error creating product", err });
    }
});

// Update a product by ID
app.put("/product/update/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { id: parseInt(id) },
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: "Error updating product", err });
    }
});

// Delete a product by ID
app.delete("/product/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await Product.findOneAndDelete({
            id: parseInt(id),
        });
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: "Error deleting product", err });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
