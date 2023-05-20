/**
 * Event Listeners
 */

// element.addEventListener('typeOfEvent', functionToCall)
const buttonTwo = document.querySelector('.btn-2')
const alertBtn = () => {
    alert('I, too, love JS!')
}
buttonTwo.addEventListener('click', alertBtn)

const newBgColour = document.querySelector('.box-3')
const changeBgColour = () => {
    newBgColour.style.backgroundColor =  '#d4af37' //'#F0D700'
}
newBgColour.addEventListener('mouseover', changeBgColour)