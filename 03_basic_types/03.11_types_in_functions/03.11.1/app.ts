// classic function
function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`
}

// arrow function
const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`
}

console.log(getFullName('Антон', 'Ларичев'))
