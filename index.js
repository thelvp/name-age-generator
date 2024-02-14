// Variables

const agifyApiUrl = `https://api.agify.io/`;
const form = document.getElementById("fetch-age");
const ageText = document.getElementById("your-age");

// Fetch method

const displayAge = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const url = `https://api.agify.io?name=${firstName}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const age = data.age;
      ageText.innerText = `${firstName}, your age is ${age}.`;
    });
};

// Event listener

form.addEventListener("submit", displayAge);
