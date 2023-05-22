let button = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')


const quotes = [
    {
        quote: `I have never understood why it is "greed" to want to keep the money you have earned but not greed to want to take somebody else's money`,
        person: `Thomas Sowell`,
    },
    {
        quote: `What I've come to learn in my long life is that ignorance is not bliss; it is time consuming and costly as hell`,
        person: `Dick Gregory`,
    },
    {
        quote: `I am not proud, but I am happy; and happiness blinds, I think, more than pride`,
        person: `Alexandre Dumas`,
    },
    {
        quote: ` If the Negro cannot stand on his own two feet, then let him fall`,
        person: `Frederick Douglass`,
    },
    {
        quote: `The Black skin is not a badge of shame, but rather a glorious symbol of national greatness `,
        person: `Marcus Garvey`,
    },
    {
        quote: `You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it`,
        person: `Malcom X`,
    },
    {
        quote: `Women sometimes allow you to be unfaithful to their love; they never allow you to wound their self-esteem`,
        person: `Alexandre Dumas Jr`,
    },
    {
        quote: `It is better to die on our feet than live on our knees for fear of colonial rule`,
        person: `Dedan Kimathi`,
    },
    {
        quote: `The white man is very clever. He came quietly and peaceably with his religion. We were amused at his foolishness and allowed him to stay. Now he has won our brothers, and our clan can no longer act like one. He has put a knife on the things that held us together and we have fallen apart`,
        person: `Chinua Achebe`,
    },
    {
        quote: `The only legitimate antidote for self-doubt and the shameful weakness it breeds is joyful self-acceptance`,
        person: `Idi Amin`,
    },
    {
        quote: `It is much easier to show compassion to animals. They are never wicked`,
        person: `Haile Selassie II`,
    },
    {
        quote: `A deception that elevates us is dearer than a host of low truths`,
        person: `Alexander Pushkin`,
    },
    {
        quote: `Gikuyu gitiui kuhitha uhoro; kiui kuhitha ndia`,
        person: `Gikuyu proverb`,
    },
    // {
    //     quote: ``,
    //     person: ``,
    // },
]

button.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
})