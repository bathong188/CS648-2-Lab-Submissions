export default function Filters({ productFilter, setProductFilter }) {
    const handleInputChange = (e) => {
        setProductFilter(e.target.value);
    };

    return (
        <form className="mt-3">
            <input
                type="text"
                id="productFilter"
                className="form-control"
                value={productFilter}
                onChange={handleInputChange}
                placeholder="Search..."
            />
        </form>
    );
}
