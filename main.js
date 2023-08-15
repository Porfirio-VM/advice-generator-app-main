window.onload = () =>{
    const adviceContainer = document.getElementById('advice');
    const buttonAdvice = document.getElementById('generator');
    const numberAdvice = document.getElementById('number');

    quotesRender(adviceContainer ,numberAdvice);

    buttonAdvice.addEventListener('click', function(){
      quotesRender(adviceContainer, numberAdvice);
    });
}

const quotesRender = (quote, numberA) =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then (data => {
        const advice = '"' + data.slip.advice+ '"';
        const number = data.slip.id;
        const fullNumber = 'advice #' + number;
        numberA.innerText = fullNumber;
        quote.innerText = advice;
    })
}