/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    
    constructor(){
        this.missed=0;
        this.phrases=this.createPhrases();
        this.activePhrase=null;
    }
     createPhrases(){
        const phrases= [
            new Phrase('Do it with passion or not at all'), 
            new Phrase('Grow through what you go through'), 
            new Phrase('Impossible is for the unwilling'), 
            new Phrase('At the end of hardship comes happiness'), 
            new Phrase('You can do anything you set your mind to')];
        return phrases;
    }
    getRandomPhrase(){
     const randomNumber=Math.floor((Math.random()*this.phrases.length));
     return this.phrases[randomNumber];
    }
}