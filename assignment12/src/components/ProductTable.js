import ProductRow from "./ProductRow";

export default function ProductTable({
    products,
    productFilter,
    deleteProduct,
}) {
    const rows = [];

    Object.values(products).forEach((product) => {
        if (
            product.name.toLowerCase().indexOf(productFilter.toLowerCase()) ===
            -1
        ) {
            return;
        }

        rows.push(
            <ProductRow
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
            ></ProductRow>
        );
    });

    return (
        <table className="table table-striped mt-3">
            <thead className="table-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col" style={{ width: "1%" }}></th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
