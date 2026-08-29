let counter = 1;

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("tableBody");

addBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const age = ageInput.value.trim();

  if (name === "" || age === "") {
    alert("لطفاً نام و سن را وارد کنید!");
    return;
  }

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${counter++}</td>
    <td>${name}</td>
    <td>${age}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  const deleteBtn = row.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    row.remove();
  });

  tableBody.appendChild(row);

  nameInput.value = "";
  ageInput.value = "";
  nameInput.focus();
});
