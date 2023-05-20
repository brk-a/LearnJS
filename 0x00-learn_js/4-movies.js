/**
 * Traverse the DOM
 */

let ul = document.querySelector('ul')
console.log(ul)

// parent node transversal
console.log(ul.parentNode) //parent node
console.log(ul.parentElement) //parent node
console.log(ul.parentNode.parentNode) //parent-of-parent node
console.log(ul.parentElement.parentElement) //parent-of-parent node
console.log(ul.parentElement.parentNode)  //parent-of-parent node
console.log(ul.parentNode.parentElement)  //parent-of-parent node; you get it now

// child node transversal
console.log(ul.childNodes) // all nodes below the current one
console.log(ul.firstChild) //first child node
console.log(ul.lastChild) // last child node
console.log(ul.children) //all elements below the current one
console.log(ul.firstElementChild) //first child element
console.log(ul.lastElementChild) // last child element
console.log(ul.childElementCount) //count of all child elements, not nodes

/// sibling node transversal
console.log(ul.previousSibling) // previous sibling node; the `space 1 between` comment
console.log(ul.nextSibling) // next sibling node; the `space 2 between` comment
console.log(ul.previousElementSibling) // previous sibling element; the h1
console.log(ul.nextElementSibling) // next sibling element; መነም. nada. zilch.
