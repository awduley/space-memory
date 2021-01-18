import { Component, OnInit } from '@angular/core';
import { AudioService } from '../services/audio.service'

@Component({
  selector: 'app-play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})

export class PlayAreaComponent implements OnInit {

  // IMPORTANT!!! This lets you dynamically set how many cards you want to play with.
  amountOfCards: number = 6;
  cardsArray = [];
  cardFlip: boolean; 

  // IMPORTANT!!! These are the properties for the logic to keep track of the matched cards as well as comparing new flips to make matches.
  canFlip: boolean = true;
  cardFlipped: number;
  cardsMatchedArray: number[] = [];

  // Logic for whether each overlay should appear or disappear
  overlayStart: boolean = false;
  overlayWin: boolean = false;
  overlayLose: boolean = false; 

  // Properties for the Time, Flips, and Score sections above the play area 
  defaultTime: number = 5;
  currentTime: number =  this.defaultTime;

  defaultFlips: number = 0;
  currentFlips: number = this.defaultFlips;

  defaultScore: number = 0;
  currentScore: number = this.defaultScore; 

  // Properties to store interval names to they can be properly cleared
  myTimeInterval: any;

  // Properties so game can be ended and a new game started
  isEnded: boolean = false;

  // Temporary array to store the shuffled cards
  tempCardsArray = [];

  constructor(private audioService: AudioService) { }

  ngOnInit() { 
    this.callOverlayStart();
    this.initCardsArray();
    this.shuffleCards();
  }


  gameStart() {
    
    console.log(this.cardsArray.length)
    this.removeOverlayStart();
    this.removeOverlayWin();
    this.removeOverlayLose();
    // this.audioService.playStartMusic();
    // setTimeout(() => {
    //   this.audioService.playBackgroundMusic();
    // },2800);
    // this.myTimeInterval = setInterval(() => {
    //   this.currentTime --;
    //   if(this.currentTime === 0) {
    //     this.gameWin(); 
    //   }
    // }, 1000);
  }

  initCardsArray() {
    // Creates an array with duplicates of exactly half the length of the variable amountofCards 
    for(let i = 1; i <= this.amountOfCards / 2; i ++) {
      this.cardsArray.push(i); 
      this.cardsArray.push(i);   
    } 
  }

  // Implementing a Fisher Yates random shuffle algorithm
  shuffleCards() {
    
    for(let i = this.cardsArray.length - 1; i > 0; i --) {
      let randNum = Math.floor(Math.random() * i);
      this.tempCardsArray = this.cardsArray[i];
      this.cardsArray[i] = this.cardsArray[randNum];
      this.cardsArray[randNum] = this.tempCardsArray;
    }
    console.log(this.tempCardsArray)
  }
 
  // Flips a card and 
  letCardFlip(event, card) {
    this.cardFlip = event;
    this.currentFlips ++;
    console.log(card); 
  } 
 
  isMatched() { 

  }

  gameWin() {
    this.callOverlayWin();
    this.currentTime = this.defaultTime;
    this.currentFlips = this.defaultFlips;
    this.currentScore = this.defaultScore; 
    this.audioService.stopBackgroundMusic();
    this.audioService.playWinMusic();
    clearInterval(this.myTimeInterval);
  }

  gameLose() {
    this.callOverlayLose();
    this.currentTime = this.defaultTime;
    this.currentFlips = this.defaultFlips;
    this.currentScore = this.defaultScore; 
    this.audioService.stopBackgroundMusic();
    this.audioService.playLoseSound();
    clearInterval(this.myTimeInterval);
  }







  // Important! Section of functions for adding and removing the three different overlays

   //Call and end the Start overlay
   callOverlayStart() {
    setTimeout(() => {
      this.overlayStart = true; 
    },100);
  }

  removeOverlayStart() {
    this.overlayStart = false;
  }

  // Call and end the Win overlay
  callOverlayWin() {
    setTimeout(() => {
      this.overlayWin = true; 
    },100);
  }

  removeOverlayWin() {
    this.overlayWin = false;
  }

  // Call and end the Lose overlay
  callOverlayLose() {
    setTimeout(() => {
      this.overlayLose = true; 
    },100);
  }

  removeOverlayLose() {
    this.overlayLose = false;
  }
  
}  
