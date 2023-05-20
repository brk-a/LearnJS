/**
 * More event listeners
 */

const revealBtn = document.querySelector('.reveal-btn')
const hiddenContent = document.querySelector('.hidden-content')
const revealContent = () => {
    hiddenContent.classList.contains('reveal-btn') ? (
        hiddenContent.classList.remove('reveal-btn')
    ) : (
        hiddenContent.classList.add('reveal-btn')
    )
}
const changeBtnText = () => {
    hiddenContent.classList.contains('reveal-btn') ? (
        revealBtn.textContent = 'Hide'
    ) : (
        revealBtn.textContent = 'Reveal'
    )
}
revealBtn.addEventListener('click', revealContent)
revealBtn.addEventListener('click', changeBtnText)