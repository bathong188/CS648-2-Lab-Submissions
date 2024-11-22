import React from "react";

const RESET_VALUES = { id: "", category: "", price: "", name: "" };

export default function ProductForm({ addProduct }) {
    const [name, setName] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [price, setPrice] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            return;
        }

        addProduct({ name, category, price });

        setName(RESET_VALUES.name);
        setCategory(RESET_VALUES.category);
        setPrice(RESET_VALUES.price);
    };

    return (
        <div className="mt-3" style={{ maxWidth: "300px" }}>
            <h3>Add a new product</h3>
            <form>
                <label htmlFor="productName" className="form-label mt-3">
                    Name
                </label>
                <input
                    type="text"
                    id="productName"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter product name"
                    required
                />

                <label htmlFor="productCategory" className="form-label mt-3">
                    Category
                </label>
                <input
                    type="text"
                    id="productCategory"
                    className="form-control"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter product category"
                />

                <label htmlFor="productPrice" className="form-label mt-3">
                    Price
                </label>
                <input
                    type="text"
                    id="productPrice"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter product price"
                />

                <button
                    type="submit"
                    className="btn btn-info mt-3"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </form>
        </div>
    );
}
