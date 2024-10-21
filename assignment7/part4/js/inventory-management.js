/*eslint-env browser*/

const DIVIDER = "-----------------------";

let inventory = [
    [4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39.99],
    [3223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99],
];

function viewInventory() {
    console.log("SKU Product (Qty) Price");
    // Sort by SKU, compare first index
    inventory.sort((a, b) => a[0] - b[0]);
    inventory.forEach((product) => {
        console.log(
            `${product[0]} ${product[1]} (${product[2]}) $${product[3].toFixed(
                2
            )}`
        );
    });
    console.log(DIVIDER);
}

function updateProduct() {
    let sku = parseInt(
        prompt("Enter the SKU number of the product to update:")
    );
    let newQuantity = parseInt(prompt("Enter the new quantity:"));

    // Find product by SKU
    let product = inventory.find((item) => item[0] === sku);

    if (product) {
        product[2] = newQuantity;
        console.log(
            `Updated quantity: ${product[0]} ${product[1]} (${
                product[2]
            }) $${product[3].toFixed(2)}`
        );
    } else {
        console.log("Product not found!");
    }
    console.log(DIVIDER);
}

function showMenu() {
    let choice = "";
    while (choice !== "3") {
        console.log("\nInventory Management System");
        console.log("1. View all products");
        console.log("2. Update product quantity");
        console.log("3. Exit");
        console.log(DIVIDER);
        choice = prompt("Enter your choice (1, 2, or 3):").toLowerCase();

        switch (choice) {
            case "1":
                viewInventory();
                break;
            case "2":
                updateProduct();
                break;
            case "3":
                console.log("Exiting program...");
                break;
            default:
                console.log("Invalid choice, please enter 1, 2, or 3.");
        }
    }
}

showMenu();
