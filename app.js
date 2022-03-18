class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
        this.color = (this.suit === "♦" || this.suit === "♥") ? "red" : "black";
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
let cardHeight = document.querySelector(".height");
let cardWidth = document.querySelector(".width");



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
button.addEventListener("click", () => {
    generateCard();
    resetInterval();
});

// Cambiar carta cada 10 segundos
// setInterval(function, milliseconds)
let myInterval = setInterval(generateCard, 10000);

// Función que permite al botón resetear el intervalo cuando se hace click

let resetInterval = () => {
    clearInterval(myInterval);
    myInterval = setInterval(generateCard, 10000);
}

// Eventos height y width
// Si los valores en input son vacíos, vuelve a sus valores por defecto.
cardHeight.addEventListener("change", () => {
    cardHeight.value !== "" ? cardContainer.style.height = `${cardHeight.value}px` : cardContainer.style.height = "400px";
});


cardWidth.addEventListener("change", () => {
    cardWidth.value !== "" ? cardContainer.style.width = `${cardWidth.value}px` : cardContainer.style.width = "250px";
})

