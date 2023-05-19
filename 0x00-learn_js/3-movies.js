//create elements
const ul = document.querySelector('ul') 
const li = document.createElement('li')

//add elements to DOM
ul.append(li)

//three methods to add content to an element
//1. modify text
const firstLineItem = document.querySelector('.list-items')
console.log(firstLineItem.innerText) //visible text inside the node
console.log(firstLineItem.textContent); //mimics the ordering and arrangement in the source file
console.log(firstLineItem.innerHTML) //similar to `textContent; shows html tags, if any

li.innerText = 'Toy Story' // adds `toy story` to the list; styles have not been applied

//2. modify/manipuate attributes & classes
li.setAttribute('id', 'main-heading') //`main-heading` styles applied to `toy story`
li.removeAttribute('id') //`main-heading` styles removed to `toy story`

const title = document.querySelector('#main-heading')
console.log(title.getAttribute('id'))

li.classList.add('list-items') //`list-items` class applied to `toy story`
li.classList.remove('list-items') //`list-items` class removed to `toy story`
console.log(li.classList.contains('list-items')) //t or f: whether `li` has the class `list-items`

//3. remove an element
li.remove() // `toy story` has been removed from DOM