const responses = [
    "You sure about that?",
    "Positive??",
    "Think again...",
    "Come on, say yes!",
    "Let’s not rush the decision...",
    "I'm seriously starving here!",
    "Huuuungryyy....",
    "Like, *really* hungry!",
    "Alright, I’ll stop bothering you...",
    "Haha, just kidding! Please say yes 😅"
];

let responseCounter = 0;

function handleNoClick() {
    const noBtn = document.querySelector('.no-button');
    const yesBtn = document.querySelector('.yes-button');

    noBtn.textContent = responses[responseCounter];
    responseCounter = (responseCounter + 1) % responses.length;

    const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentFontSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
