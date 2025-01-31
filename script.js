document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dateInput = document.getElementById("date").value;
    const gender = document.getElementById("gender").value;
    const dayOutput = document.getElementById("dayOutput");
    const nameOutput = document.getElementById("nameOutput");

    if (!dateInput || !gender) {
      dayOutput.textContent = "Please fill in all fields.";
      return;
    }

    const date = new Date(dateInput);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const d = Math.floor(
      (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) % 7
    );

    const dayOfWeek = d < 0 ? d + 7 : d;
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
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    dayOutput.textContent = `You were born on a ${dayNames[dayOfWeek]}.`;
    if (gender === "male") {
      nameOutput.textContent = `Your Akan name is ${maleNames[dayOfWeek]}.`;
    } else if (gender === "female") {
      nameOutput.textContent = `Your Akan name is ${femaleNames[dayOfWeek]}.`;
    }
  });
