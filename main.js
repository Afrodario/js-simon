let container = document.getElementById("container");
let innerTimer = document.getElementById("timer");
let resultBox = document.getElementById("result");
let randomArray = [];
let targetArray = [];

//Invoco la funzione di generazione numeri casuali
randomArrayGenerator(container, randomArray);
console.log(randomArray);

//Imposto un contatore a 0
let counter = 0;
//Faccio partire il timer impostato a 30 secondi
let timer = setInterval(

    function() {

        //Incremento il contatore e lo mostro a schermo
        innerTimer.innerHTML = counter;
        counter++;
        //A questo secondo nascondo i numeri casuali
        if (counter === 31) {
            container.classList.add("hidden");
        } else if (counter === 32) {
            //Reimposto il contatore a 0 e interrompo la funzione di timer
            counter = 0;
            clearInterval(timer);

            innerTimer.innerHTML = "";
            //Invoco la funzione di richiesta dei numeri
            numberRequest();
            //Utilizzo un filter per mettere a confronto l'array casuale iniziale con quello generato dal prompt dell'utente
            const comparisonArray = randomArray.filter(number => {
                if (targetArray.includes(number)) {
                    return true;
                }
                return false;
            });

            if (comparisonArray.length == 0) {
                resultBox.innerHTML = "Non sei riuscito a ricordarti nessun numero. Prova ancora!";
            } else {
                resultBox.innerHTML = `I numeri che sei riuscito a ricordarti sono: <br>${comparisonArray}`;
            }

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
    
    return container.innerHTML = `I numeri generati sono: ${randomArray}`;
}

//Funzione di richiesta numero
function numberRequest () {

    while (targetArray.length < 5) {
        let selection = parseInt(prompt("Inserisci un numero"));
        targetArray.push(selection);
    }

    console.log(targetArray);

}