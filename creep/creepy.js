
function enterSite() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

const creepyFacts = [
    "In 1872, a ship was discovered floating in the Atlantic Ocean with no one on board.",
    "Some tumors can grow teeth and hair.",
    "The average person walks past 16 murderers in their lifetime.",
    "Rats laugh when tickled.",
    "In ancient Rome, they used human urine as mouthwash.",
   
];

const coolTrivia = [
    "Bananas are berries, but strawberries aren't.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "Octopuses have three hearts and nine brains.",
    "A group of flamingos is called a 'flamboyance'.",
    "There's a species of jellyfish that is biologically immortal.",
    
];

function generateCreepyFact() {
    const randomIndex = Math.floor(Math.random() * creepyFacts.length);
    document.getElementById('creepy-fact').textContent = creepyFacts[randomIndex];
}

function generateCoolTrivia() {
    const randomIndex = Math.floor(Math.random() * coolTrivia.length);
    const coolTriviaElement = document.getElementById('cool-trivia-list');
    
    // Clear previous trivia
    coolTriviaElement.innerHTML = '';

    // Create new <p> element for the new trivia
    const newTrivia = document.createElement('p');
    newTrivia.textContent = coolTrivia[randomIndex];
    coolTriviaElement.appendChild(newTrivia);
}