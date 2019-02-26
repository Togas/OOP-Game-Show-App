/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase=phrase.toLowerCase();
    }
    
    addPhraseToDisplay(){
        const phrasePosition=document.querySelector('#phrase ul');
        for(let i=0; i<this.phrase.length;i++){
        const letterBox= document.createElement('li');
        letterBox.textContent=this.phrase.charAt(i);
        if(this.phrase.charAt(i)==' '){
            letterBox.className='space';
        }else{ letterBox.className='letter';}
        phrasePosition.appendChild(letterBox);
        }
    }
    checkLetter(selectedLetter){
        if(this.phrase.indexOf(selectedLetter)!=-1){
            return this.phrase.indexOf(selectedLetter);
        } else{ return false;}
    }
    showMatchedLetter(letter){
        const letterPosition=this.phrase.indexOf(letter);
        const textBox=document.querySelectorAll('#phrase ul li')[letterPosition];
        textBox.textContent=letter;
        textBox.className='show';
    }
}