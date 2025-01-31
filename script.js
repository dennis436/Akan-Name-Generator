document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dateParts = dateInput.split("-");

    if (dateParts.length !== 3) {
      dayOutput.textContent = "Please enter a valid date in YYYY-MM-DD format.";
      return;
    }

    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    if (month < 1 || month > 12 || day < 1 || day > 31) {
      dayOutput.textContent = "Please enter a valid date.";
      return;
    }

    if (!dateInput || !gender) {
      nameOutput.textContent = "Please fill in all fields.";
      return;
    }

    const cc = Math.floor(year / 100);
    const YY = year % 100;
    const d = Math.floor(
      (cc / 4 - 2 * cc - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) % 7
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
    if (gender === "male") {
      nameOutput.textContent = `Your Akan name is ${maleNames[dayOfWeek]}.`;
    } else if (gender === "female") {
      nameOutput.textContent = `Your Akan name is ${femaleNames[dayOfWeek]}.`;
    }
  });
