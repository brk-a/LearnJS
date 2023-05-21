/**
 * Event Propagation
 */

const thirdParam = false
const setThirdParam = () => !thirdParam ? true : false

window.addEventListener('click', () => {
    console.log('Window')
    alert('Window object clicked')
    // setThirdParam()
}, thirdParam)

document.addEventListener('click', () => {
    console.log('Document')
    alert('Document object clicked')
    // setThirdParam()
}, thirdParam)

document.querySelector('.div2').addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('stopped propagation at div 2')
    alert('div2 object clicked')
    // setThirdParam()
}, thirdParam)

document.querySelector('.div1').addEventListener('click', () => {
    console.log('div 1')
    alert('div1 object clicked')
    // setThirdParam()
}, thirdParam)

document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    alert('button object clicked')
    setThirdParam()
}, thirdParam)