import React from "react";

import Filters from "./Filters";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

const DEFAULT_PRODUCTS_STATE = {
    1: { id: 1, category: "Music", price: "$459.99", name: "Clarinet" },
    2: { id: 2, category: "Music", price: "$5,000", name: "Cello" },
    3: { id: 3, category: "Music", price: "$4,500", name: "Tuba" },
    4: { id: 4, category: "Furniture", price: "$799", name: "Chaise Lounge" },
    5: { id: 5, category: "Furniture", price: "$1,300", name: "Dining Table" },
    6: { id: 6, category: "Furniture", price: "$100", name: "Bean Bag" },
};

export default function Products() {
    const [products, setProducts] = React.useState(DEFAULT_PRODUCTS_STATE);
    const [productFilter, setProductFilter] = React.useState("");

    const addProduct = (newProduct) => {
        const productId = new Date().getTime();
        setProducts({
            ...products,
            [productId]: { id: productId, ...newProduct },
        });
    };

    const deleteProduct = (id) => {
        const updatedProducts = { ...products };
        delete updatedProducts[id];
        setProducts(updatedProducts);
    };

    return (
        <div
            className="container text-start my-5"
            style={{ maxWidth: "600px" }}
        >
            <h1>My Inventory</h1>
            <Filters
                productFilter={productFilter}
                setProductFilter={setProductFilter}
            />
            <ProductTable
                products={products}
                productFilter={productFilter}
                deleteProduct={deleteProduct}
            ></ProductTable>
            <ProductForm addProduct={addProduct}></ProductForm>
        </div>
    );
}
