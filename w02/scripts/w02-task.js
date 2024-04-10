/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Porter Clark";
let currentYear = 2024;
let profilePicture = "images/me.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img")

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
nameElement.textContent = `${fullName}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of profilePicture`)

/* Step 5 - Array */
const foods = ["chicken alfredo", "fried chicken", "chicken legs", "chicken sandwiches", "egg"];
foodElement.innerHTML = foods.join(", ");
const favorite = "chicken bone broth";
foods.push(favorite);
foodElement.innerHTML += `<br>${foods.join(", ")}`;
foods.shift();
foodElement.innerHTML += `<br>${foods.join(", ")}`;
foods.pop();
foodElement.innerHTML += `<br>${foods.join(", ")}`;