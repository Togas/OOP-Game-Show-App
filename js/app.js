/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//event listener for start Game button
const game = new Game();
document.querySelector('#btn__reset').addEventListener('click', () => {
    game.startGame();

});

//event listener for clicking a key and then call handleinteraction on clicked key
const startClickEvent = document.querySelector('#qwerty').addEventListener('click', (e) => {
    if (e.target.tagName == 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

//event listener for pressing a key and then call handleinteraction on pressed key
document.addEventListener('keyup', (e) => {
    document.querySelectorAll('#qwerty button').forEach(button => {
        if (button.textContent == e.code.substring(3).toLowerCase()) {
            game.handleInteraction(button)
        }
    });
});


