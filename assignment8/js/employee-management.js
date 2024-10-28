/*eslint-env browser*/

let $ = (id) => {
    return document.getElementById(id);
};

let employees = [
    ["Sally Smith", "Quality Assurance", 3423],
    ["Mark Martin", "VP Sales", 3346],
    ["John Johnson", "Marketing", 3232],
    ["Thong Le", "Intern", 3464],
    ["Vy Le", "HR", 3573],
];

const renderEmployees = () => {
    const employeeTableBody = $("employeeTableBody");

    // Clear table body
    employeeTableBody.innerHTML = "";

    // Populate table
    employees.forEach((employee, index) => {
        const row = employeeTableBody.insertRow();

        row.insertCell(0).textContent = employee[0];
        row.insertCell(1).textContent = employee[1];
        row.insertCell(2).textContent = employee[2];

        // Delete button
        const deleteCell = row.insertCell(3);
        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-primary"
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteEmployee(index);
        deleteCell.appendChild(deleteButton);
    });

    // Update employee count
    $("employeeCount").textContent = `Showing ${employees.length} Employees`;
};

const addEmployee = () => {
    // Get input values
    const nameInput = $("name");
    const titleInput = $("title");
    const extInput = $("extension");

    // Check for falsy input values
    if (!nameInput?.value || !titleInput?.value || !parseInt(extInput?.value)) {
        return;
    }

    // Add employee to array
    employees.push([
        nameInput.value,
        titleInput.value,
        parseInt(extInput.value),
    ]);

    // Clear input fields
    nameInput.value = "";
    titleInput.value = "";
    extInput.value = "";

    renderEmployees();
};

const deleteEmployee = (index) => {
    employees.splice(index, 1);
    renderEmployees();
};

renderEmployees();
