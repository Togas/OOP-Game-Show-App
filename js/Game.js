/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {

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
    getRandomPhrase() {
        const randomNumber = Math.floor((Math.random() * this.phrases.length));
        return this.phrases[randomNumber];
    }

    startGame() {
        this.resetGame();
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

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

    removeLife() {
        document.querySelectorAll('#scoreboard ol li')[this.missed].firstChild.src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed == 5) {
            this.gameOver('lose');
        }
    }

    checkForWin() {
        const hiddenLetter = document.querySelectorAll('#phrase ul li:not(.show)');
        if (hiddenLetter.length == 0) {
            this.gameOver('win');
        }
    }

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
    resetGame() {
        this.missed = 0;
        if (document.querySelector('#phrase ul').hasChildNodes) {
            document.querySelectorAll('#phrase ul li').forEach((element) => element.remove());
        }
        document.querySelectorAll('#qwerty button').forEach((element) => {
            if (element.hasAttribute('disabled')) {
                element.setAttribute('disabled', false)
            }
            element.className = 'key';
        });
        document.querySelectorAll('#scoreboard ol li img')
        .forEach((element)=>element.src='images/liveHeart.png');
    }
}