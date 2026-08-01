// Dashboard Data

let projects = JSON.parse(localStorage.getItem("projects")) || [];

const projectList = document.getElementById("projectList");
const projectCount = document.getElementById("projectCount");
const galleryCount = document.getElementById("galleryCount");
const contactCount = document.getElementById("contactCount");

// Default Counts
galleryCount.innerText = localStorage.getItem("galleryCount") || 12;
contactCount.innerText = localStorage.getItem("contactCount") || 0;

// Load Projects
function loadProjects() {

    projectList.innerHTML = "";

    projects.forEach((project, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${project}
            <button onclick="deleteProject(${index})">Delete</button>
        `;

        projectList.appendChild(li);

    });

    projectCount.innerText = projects.length;

    localStorage.setItem("projects", JSON.stringify(projects));

}

// Add Project
document.getElementById("addProject").addEventListener("click", function () {

    const input = document.getElementById("projectName");

    if (input.value.trim() === "") {

        alert("Enter Project Name");

        return;

    }

    projects.push(input.value);

    input.value = "";

    loadProjects();

});

// Delete Project
function deleteProject(index) {

    if (confirm("Delete this project?")) {

        projects.splice(index, 1);

        loadProjects();

    }

}

// Logout
document.getElementById("logoutBtn").addEventListener("click", function () {

    if (confirm("Logout?")) {

        window.location.href = "login.html";

    }

});

// First Load
loadProjects();
function loadContacts() {

    const tbody = document.querySelector("#contactTable tbody");

    if (!tbody) return;

    tbody.innerHTML = "";

    let enquiries = JSON.parse(localStorage.getItem("enquiries")) || [];

    contactCount.innerText = enquiries.length;

    enquiries.forEach(item => {

        tbody.innerHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>${item.message}</td>
            <td>${item.date}</td>
        </tr>
        `;

    });

}

loadContacts();
