class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
        this.color = (this.suit === "♦" || this.suit === "♥") ? "red" : (this.suit === "♠" || this.suit === "♣") ? "black" : "blue";
    }
}

let possibleNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let possibleSuits = ["♦", "♥", "♠", "♣"]

let pickRandomFromArray = (array) => {
    let randomIndex = Math.floor(Math.random() * (array.length));
    return array[randomIndex];
}

// Objetos DOM

let topSuit = document.querySelector(".topSymbol");
let cardNumber = document.querySelector(".number");
let bottomSuit = document.querySelector(".bottomSymbol");
let cardContainer = document.querySelector(".card")
let button = document.querySelector(".btn1");


// Funcion para cambiar objetos en página
const generateCard = () => {
    let objectCardNumber = pickRandomFromArray(possibleNumbers);
    let objectCardSuit = pickRandomFromArray(possibleSuits);
    let cardObject = new Card(objectCardNumber, objectCardSuit);
    
    topSuit.innerHTML = cardObject.suit;
    bottomSuit.innerHTML = cardObject.suit;
    cardNumber.innerHTML = cardObject.number;
    // Cambia el color de acuerdo a lo definido en el objeto.
    cardContainer.style.color = cardObject.color;
}

// Función onload
window.onload = generateCard;

// Funcionalidad botón
button.addEventListener("click", generateCard);

// Cambiar carta cada 10 segundos
// setInterval(function, milliseconds)
window.setInterval(generateCard, 10000);


