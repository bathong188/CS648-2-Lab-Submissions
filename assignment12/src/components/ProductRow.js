export default function ProductRow({ product, deleteProduct }) {
    const handleDelete = () => {
        deleteProduct(product.id);
    };

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>
                <button className="btn btn-info btn-sm" onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    );
}
