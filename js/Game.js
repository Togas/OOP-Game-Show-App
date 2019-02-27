/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

    //constructor initializes especially an array with phrase objects
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        const phrases = [
            new Phrase('Do it with passion or not at all'),
            new Phrase('Grow through what you go through'),
            new Phrase('Impossible is for the unwilling'),
            new Phrase('At the end of hardship comes happiness'),
            new Phrase('You can do anything you set your mind to')
        ];
        return phrases;
    }

    //gets a random phrase and assigns it the active phrase variable
    getRandomPhrase() {
        const randomNumber = Math.floor((Math.random() * this.phrases.length));
        return this.phrases[randomNumber];
    }

    //starts the game while discarding overlay and reset last game status
    startGame() {
        this.resetGame();
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //compares if selected key matches the quote. It disables the selected key and gives it a class depending of its matching.
    //It alsso checks for win/gameover and removes life if selected key is wrong

    handleInteraction(button) {
        const letter = button.textContent;
        const phrase = new Phrase(this.activePhrase.phrase);
        if (phrase.checkLetter(letter)) {
            button.className = 'chosen';
            phrase.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
        button.setAttribute('disabled', true);
    }
//simply replaces heart with an empty heart
    removeLife() {
        document.querySelectorAll('#scoreboard ol li')[this.missed].firstChild.src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed == 5) {
            this.gameOver('lose');
        }
    }

    //if won then calls the gameover function
    checkForWin() {
        const hiddenLetter = document.querySelectorAll('#phrase ul li:not(.show)');
        if (hiddenLetter.length == 0) {
            this.gameOver('win');
        }
    }

    //shows changed overlay depending on result
    gameOver(result) {
        document.querySelector('#overlay').style.display = '';
        if (result == 'win') {
            document.querySelector('#overlay h1').className = 'win';
            document.querySelector('#overlay h1').textContent = 'YOU WIN';

        } else {
            document.querySelector('#overlay h1').className = 'lose';
            document.querySelector('#overlay h1').textContent = 'YOU LOSE';
        }
    }
    //resets game stats
    resetGame() {
        this.missed = 0;
        if (document.querySelector('#phrase ul').hasChildNodes) {
            document.querySelectorAll('#phrase ul li').forEach((element) => element.remove());
        }
        document.querySelectorAll('#qwerty button').forEach((element) => {
            if (element.hasAttribute('disabled')) {
                element.removeAttribute('disabled');
            }
            element.className = 'key';
        });
        document.querySelectorAll('#scoreboard ol li img')
        .forEach((element)=>element.src='images/liveHeart.png');
    }
}