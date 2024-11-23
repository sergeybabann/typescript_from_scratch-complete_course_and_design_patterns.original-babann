"use strict";
// classic function
function getFullName(firstname, surname) {
    return `${firstname} ${surname}`;
}
// arrow function
const getFullNameArrow = (firstname, surname) => {
    return `${firstname} ${surname}`;
};
console.log(getFullName('Антон', 'Ларичев'));
