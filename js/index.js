console.log('Connected') 

const getElement = (selector) => { //1st line takes in the argument
    const element = document.querySelector(selector) // takes in the argument and inputs that argument as a querySelector and stores the variable
    if(element) return element //checks if there is a querySelector with that argument 
    throw Error( //if it can't find it, then it throws an error
        `Please double check className, there is no "${selector}" class`
    )
}

const links = getElement('.nav-links')
const navBTNDom = getElement('.nav-btn')
const date = getElement('#date');
const currentYear = new Date().getFullYear()

date.innerHTML += currentYear
console.log(`The year is currently ${currentYear}`)

navBTNDom.addEventListener('click', () => {
    links.classList.toggle('show-link') // Adds/remove class to navbtn if clicked
})