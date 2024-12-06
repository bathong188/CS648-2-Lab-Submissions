import React, { Component } from "react";
import axios from "axios";
import Filters from "./Filters.js";
import ProductTable from "./ProductTable.js";
import ProductForm from "./ProductForm.js";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: "",
            products: {},
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await axios.get(
                "http://localhost:5000/product/get"
            );
            const products = {};
            response.data.forEach((p) => {
                products[p.id] = p.product;
            });
            this.setState({ products });
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    }

    handleFilter(filterInput) {
        this.setState(filterInput);
    }

    async handleSave(product) {
        try {
            if (!product.id) {
                product.id = new Date().getTime();
            }
            const entry = {
                id: product.id,
                product: {
                    productid: product.id,
                    category: product.category,
                    price: product.price,
                    name: product.name,
                    instock: true,
                },
            };
            const response = await axios.post(
                "http://localhost:5000/product/create",
                entry
            );
            this.setState((prevState) => ({
                products: {
                    ...prevState.products,
                    [response.data.id]: response.data.product,
                },
            }));
        } catch (err) {
            console.error("Error saving product:", err);
        }
    }

    async handleDestroy(productid) {
        try {
            await axios.delete(
                `http://localhost:5000/product/delete/${productid}`
            );
            this.setState((prevState) => {
                const products = { ...prevState.products };
                delete products[productid];
                return { products };
            });
        } catch (err) {
            console.error("Error deleting product:", err);
        }
    }

    render() {
        return (
            <div>
                <h1>My Inventory</h1>
                <Filters onFilter={this.handleFilter}></Filters>
                <ProductTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    onDestroy={this.handleDestroy}
                ></ProductTable>
                <ProductForm onSave={this.handleSave}></ProductForm>
            </div>
        );
    }
}

export default Products;
