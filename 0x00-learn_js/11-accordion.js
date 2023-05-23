const accordion = document.getElementsByClassName('content-container')
// console.log(typeof(accordion), accordion);

for(let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function (){
        this.classList?.toggle('active')
    }) //arrow function does not work because rules of `this`
}