'use strict';

const modalElement = document.querySelector('#exampleModal');
const myModal = new bootstrap.Modal(modalElement);

function getQuote (){
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
            .then(response => {
                return response.json();
            })
            .then(data => {
                const chuckQuote = document.querySelector('#chuckQuote');
                chuckQuote.innerText = data.value;
                myModal.show()
            })
            .catch(error => {
                console.error({error})
                return error;
            });
}

getQuote()

