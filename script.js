document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dateInput = document.getElementById("date").value;
    const gender = document.getElementById("gender").value;
    const output = document.getElementById("output");

    if (!dateInput || !gender) {
      output.textContent = "Please fill in all fields.";
      return;
    }

    const date = new Date(dateInput);
    const dayOfWeek = date.getDay();

    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    if (gender === "male") {
      output.textContent = `Your Akan name is ${maleNames[dayOfWeek]}`;
    } else if (gender === "female") {
      output.textContent = `Your Akan name is ${femaleNames[dayOfWeek]}`;
    }
  });
