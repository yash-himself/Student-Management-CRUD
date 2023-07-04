; let tBody = document.getElementById("tbody")

let createForm = document.getElementById("createform");
let editForm = document.getElementById("editform");
let deleteForm = document.getElementById("deleteform");

let box = document.getElementById("searchResult");



function clearForm() {
    document.getElementById("createform").getElementsByTagName("input")[0].innerHTML = ""
    document.getElementById("createform").getElementsByTagName("input")[1].innerHTML = ""
    document.getElementById("createform").getElementsByTagName("input")[2].innerHTML = ""
    document.getElementById("createform").getElementsByTagName("input")[3].innerHTML = ""
    document.getElementById("createform").getElementsByTagName("input")[4].innerHTML = ""
    document.getElementById("createform").getElementsByTagName("input")[5].innerHTML = ""

    document.getElementById("editform").getElementsByTagName("input")[0].innerHTML = ""
    document.getElementById("editform").getElementsByTagName("input")[1].innerHTML = ""
    document.getElementById("editform").getElementsByTagName("input")[2].innerHTML = ""
    document.getElementById("editform").getElementsByTagName("input")[3].innerHTML = ""
    document.getElementById("editform").getElementsByTagName("input")[4].innerHTML = ""
    document.getElementById("editform").getElementsByTagName("input")[5].innerHTML = ""
    let id = document.getElementById("deleteform").getElementsByTagName("input")[0].innerHTML = ""
    let Email = document.getElementById("deleteform").getElementsByTagName("input")[1].innerHTML = ""
}

let students = [
    { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' },
    { ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' },
    { ID: 3, name: 'jakob', age: 25, grade: 'F', degree: 'MBA', email: 'jakob@example.com' },
    { ID: 4, name: 'Charlie', age: 20, grade: 'C', degree: 'Arts', email: 'charlie@example.com' }];

function renderTable() {
    students.forEach((item) => {
        let row = document.createElement("tr");
        row.innerHTML =
            `<td> ${item.name}</td>
        <td> ${item.ID} </td>
        <td> ${item.age}</td>
        <td> ${item.email}</td>
        <td> ${item.degree}</td>
        <td> ${item.grade}</td>
        <td><i width="20px" class="fa-solid fa-trash-can" onclick="deleteValue('${item.ID}','${item.email}')" ></i>
        <i onclick="showEdit()" class="fa-sharp fa-solid fa-pen-to-square"></i>`
        tBody.appendChild(row)
    })
}

renderTable()


function showCreate() {
    createForm.style.display = "flex";
    editForm.style.display = "none";
    deleteForm.style.display = "none";

}
function showEdit() {
    createForm.style.display = "none";
    editForm.style.display = "flex";
    deleteForm.style.display = "none";

}
function ShowDel() {
    createForm.style.display = "none";
    editForm.style.display = "none";
    deleteForm.style.display = "flex";
}


function createValue() {
    let id = document.getElementById("createform").getElementsByTagName("input")[0].value;
    let name = document.getElementById("createform").getElementsByTagName("input")[1].value;
    let age = document.getElementById("createform").getElementsByTagName("input")[2].value;
    let grade = document.getElementById("createform").getElementsByTagName("input")[3].value;
    let degree = document.getElementById("createform").getElementsByTagName("input")[4].value;
    let email = document.getElementById("createform").getElementsByTagName("input")[5].value;
    email = email.toLowerCase()
    grade = grade.toUpperCase()
    if (id == "" || name == "" || age == "" || email == "" || grade == "" || degree == "") {
        alert("All Inputs are Required...");
        return;
    }
    let obj = { ID: id, name: name, age: age, grade: grade, degree: degree, email: email }
    let newRow = document.createElement("tr")
    newRow.innerHTML =
        `<td> ${obj.name}</td>
    <td> ${obj.ID} </td>
    <td> ${obj.age}</td>
    <td> ${obj.email}</td>
    <td> ${obj.degree}</td>
    <td> ${obj.grade}</td>
    <td><i width="20px" class="fa-solid fa-trash-can" onclick="deleteValue('${obj.ID}','${obj.email}')" class="btn"></i><i onclick="showEdit()" class="fa-sharp fa-solid fa-pen-to-square"></i></td>`
    tBody.appendChild(newRow)
    students.push(obj)
    clearForm()

}

function editValue() {
    let id = document.getElementById("editform").getElementsByTagName("input")[0].value;
    let name = document.getElementById("editform").getElementsByTagName("input")[1].value;
    let age = document.getElementById("editform").getElementsByTagName("input")[2].value;
    if (age >= 130) {
        alert("Enter correct age..")
        return;
    }

    let grade = document.getElementById("editform").getElementsByTagName("input")[3].value;
    grade.toUpperCase()
    let degree = document.getElementById("editform").getElementsByTagName("input")[4].value;
    let email = document.getElementById("editform").getElementsByTagName("input")[5].value;
    email.toLowerCase();
    if (id == "" || name == "" || age == "" || email == "" || grade == "" || degree == "") {
        alert("All Inputs are Required...");
        return;
    }

    students.forEach((i) => {
        if (i.ID == id) {
            i.name = name;
            i.age = age;
            i.degree = degree;
            i.email = email;
            i.grade = grade;
        }
    })
    tBody.innerHTML = ""
    renderTable()
    clearForm()

}



function deleteValue(id, Email) {
    let flag = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].ID == id && students[i].email == Email) {
            students.splice(i, 1)
            flag = true;
        }

    }
    if (!flag) {

        alert("Data inaccurate ..");
        return;
    }

    tBody.innerHTML = ""
    renderTable();

}




// searching functionality 


function search() {
    let searchterm = document.getElementById("searchInput").value;
    if (searchterm == "") {
        alert("Invalid input..")
        return;
    }
    document.getElementById("searchInput").value = "";
    students.forEach((i) => {

        if (i.ID == searchterm || i.name.includes(searchterm) || i.email.includes(searchterm) || i.degree.includes(searchterm)) {
            let result = document.createElement("table");
            result.innerHTML =
                `<tr><th> ${i.name}</th>
        <th> ${i.ID} </th>
        <th> ${i.age}</th>
        <th> ${i.email}</th>
        <th> ${i.degree}</th>
        <th> ${i.grade}</th></tr>`
            box.appendChild(result)
        }

    })
}




