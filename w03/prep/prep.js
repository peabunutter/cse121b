let firstName = "Porter";
let lastName = "Clark";

function fullName(first, last)
{
    return `${first} ${last}`;
}

const fullName2 = function (first, last)
{
    return `${first} ${last}`;
}

const fullname3 = (first, last) => `${first} ${last}`;

document.querySelector(`#firstName`).innerHTML = fullname3(firstName, lastName)