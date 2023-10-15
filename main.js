const titleContainer = document.querySelector('.advice-container_title');
const adviceContainer = document.querySelector('.advice-container_text')
const button = document.querySelector('.advice-container_button')

async function generateQuote(){
    try{
        loadingMessage()
        const response = await fetch('https://api.adviceslip.com/advice', {
            cache: 'no-store'
        })
        if(!response.ok){
            throw new Error('Error obtaining the quote')
        }
        const data = await response.json();
        const titleFormat = 'Advice #' + data.slip.id;
        const adviceFormat = decodeURIComponent('"' + data.slip.advice + '"');
        addQuote(titleFormat, adviceFormat);
    }catch{
        console.log('Error:', error);
    }
}

function addQuote(title, advice){
    titleContainer.innerText = title;
    adviceContainer.innerText = advice
}

function loadingMessage(){
    const loadingText = 'Loading Advice...'
    addQuote(loadingText, loadingText)
}

window.onload = () =>{
    generateQuote();
    button.addEventListener('click', generateQuote)
}