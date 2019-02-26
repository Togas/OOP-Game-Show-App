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
        return this.phrases[randomNumber].phrase;
    }

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = getRandomPhrase();
        const phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();
    }

    handleInteraction(button) {
        const letter = button.textContent;
        const phrase = new Phrase(this.activePhrase);
        if (phrase.checkLetter(letter)) {
            showMatchedLetter(letter);
            checkForWin();
        } else {
            button.className = 'wrong';
            removeLife();
        }
        button.setAttribute('disabled', true);
    }

    removeLife(){
       document.querySelectorAll('#scoreboard ol li')[this.missed].firstChild.src='images/lostHeart.png';
       this.missed++;
       if(this.missed==5){
           gameOver('lose');
       } 
    }
    
    checkForWin(){
        const hiddenLetter=document.querySelectorAll('#phrase ul li')
        .filter(letter=>letter.classname!='show');
        if(hiddenLetter.length==0){
            gameOver('win');
        }
    }

    gameOver(result){
       document.querySelector('#overlay').style.display='';
        if(result=='win'){
            document.querySelector('#overlay h1').className='win';
            document.querySelector('#overlay h1').textContent='YOU WIN';

        } else{ 
            document.querySelector('#overlay h1').className='lose';
            document.querySelector('#overlay h1').textContent='YOU LOSE';
        }
    }
}