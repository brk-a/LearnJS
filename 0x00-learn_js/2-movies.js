//inline styling: works for a single element only
const title = document.querySelector('#main-heading')
console.log(title)
title.style.color = 'red'

// won't work for `li` items
const listItems = document.querySelectorAll('.list-items')
console.log(listItems)
listItems.style.color = 'blue' //check console; error. comment this line out

for(let i=0; i<listItems.length; i++){
    listItems[i].style.fontSize = '2rem' 
} //works now
