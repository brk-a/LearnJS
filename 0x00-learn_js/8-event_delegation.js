/**
 * event delegation
 */

const parentElem = document.querySelector('.div1')
    .addEventListener('click', (e) => {
        console.log(`${e.target.getAttribute('id')} is clicked`)
        const target = e.target
        if(target.matches('div')){
            target.style.backgroundColor = '#722f37'
        }
    })

const sports = document.querySelector('.div1')
const newSport = document.createElement('div')
newSport.innerText = 'Football'
newSport.setAttribute('id', 'football')
newSport.setAttribute('class', 'sport')
sports.appendChild(newSport)