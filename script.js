// ===== STATES ARRAY =====
const states = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue",
  "Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu",
  "Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi",
  "Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo",
  "Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","FCT - Abuja"
];

// ===== POPULATE STATES DROPDOWN =====
const stateSelect = document.getElementById("state");
states.forEach(s => {
    let option = document.createElement("option");
    option.value = s;
    option.textContent = s;
    stateSelect.appendChild(option);
});

// ===== FORM SUBMISSION =====
const form = document.getElementById("regForm");
form.addEventListener("submit", e => {
    e.preventDefault();

    let list = JSON.parse(localStorage.getItem("customs")) || [];

    const data = {
        fullname: document.getElementById("fullname").value,
        replacementNo: document.getElementById("passportNo").value,
        nin: document.getElementById("nin").value,
        state: document.getElementById("state").value,
        lga: document.getElementById("lga").value,
        nextOfKin: document.getElementById("nok").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        qualification: document.getElementById("qualification").value,
        maritalStatus: document.getElementById("marital").value,
        status: "Pending"
    };

    list.push(data);
    localStorage.setItem("customs", JSON.stringify(list));

    // Show popup
    const popup = document.getElementById("successPopup");
    popup.style.display = "block";
    setTimeout(() => popup.style.display = "none", 3000);

    form.reset();

    // Optional: refresh admin dashboard if open
    if (typeof loadAdminTable === "function") loadAdminTable();
});
