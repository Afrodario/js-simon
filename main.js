let container = document.getElementById("container");
let innerTimer = document.getElementById("timer");
let randomArray = [];
let targetArray = [];

randomArrayGenerator(container, randomArray);
console.log(randomArray);

let counter = 0;

let timer = setInterval(

    function() {

        innerTimer.innerHTML = counter;
        counter++;
        if (counter === 11) {
            counter = 0;
            clearInterval(timer);
            console.log("OK!")
            numberRequest();

            const comparison = randomArray.filter(number => {
                if (targetArray.includes(number)) {
                    return true;
                }
                return false;
            }); 
            console.log(comparison);

        }

    }, 1000);





//FUNZIONI
//Generazione di un numero casuale
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Generazione di un array di 5 numeri casuali
function randomArrayGenerator (container, randomArray) {

    while (randomArray.length < 5) {
        randomArray.push(randomNumber(1, 100));
    }
    
    return container.innerHTML = randomArray;
}

//Funzione di richiesta numero
function numberRequest () {

    while (targetArray.length < 5) {
        let selection = parseInt(prompt("Inserisci un numero"));
        targetArray.push(selection);
    }

    console.log(targetArray);

}