const studentName = document.querySelector('#studentName');
const studentID = document.querySelector('#studentID');
const emailID = document.querySelector('#emailID');
const contactNo = document.querySelector('#contactNo');
const button = document.querySelector('#button');

let isEditing = false;  // Flag to track if editing
let editingRow = null;  // Variable to store the row being edited

button.addEventListener('click', function() {
  // Exit if any field is empty
  if (!studentName.value || !studentID.value || !emailID.value || !contactNo.value) return;

  if (isEditing) {
    // Update the existing row if editing
    editingRow.children[0].innerHTML = studentName.value;
    editingRow.children[1].innerHTML = studentID.value;
    editingRow.children[2].innerHTML = emailID.value;
    editingRow.children[3].innerHTML = contactNo.value;

    // Reset editing state
    isEditing = false;
    editingRow = null;
    button.innerText = "Add Student"; // Reset button text to "Add"
  } else {
    // Create a new row
    const Row = document.createElement("tr");
    Row.classList.add("th")

    // Add student data to the row
    const Cell1 = document.createElement("td");
    Cell1.innerHTML = studentName.value;
    Row.appendChild(Cell1);

    const Cell2 = document.createElement("td");
    Cell2.innerHTML = studentID.value;
    Row.appendChild(Cell2);

    const Cell3 = document.createElement("td");
    Cell3.innerHTML = emailID.value;
    Row.appendChild(Cell3);

    const Cell4 = document.createElement("td");
    Cell4.innerHTML = contactNo.value;
    Row.appendChild(Cell4);

    // Add Edit and Delete buttons
    const Cell5 = document.createElement("td");
    Cell5.classList.add("btn")

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    Cell5.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    Cell5.appendChild(deleteButton);

    Row.appendChild(Cell5);

    // Delete functionality
    deleteButton.addEventListener('click', function() {
      Row.remove();
    });

    // Edit functionality
    editButton.addEventListener('click', function() {
      studentName.value = Cell1.innerHTML;
      studentID.value = Cell2.innerHTML;
      emailID.value = Cell3.innerHTML;
      contactNo.value = Cell4.innerHTML;

      isEditing = true;
      editingRow = Row;
      button.innerText = "Update Student"; // Change button text to "Update"
    });

    // Append the new row to the table
    const table = document.querySelector('#studentTable');
    table.appendChild(Row);
  }

  // Clear input fields
  studentName.value = '';
  studentID.value = '';
  emailID.value = '';
  contactNo.value = '';
});
