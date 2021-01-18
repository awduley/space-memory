import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  startMusic = new Audio('../../assets/start.wav');
  backgroundMusic = new Audio('../../assets/Puppets-Pulling-Strings-compressed.mp3');
  flipSound = new Audio('../../assets/flip.wav');
  successSound = new Audio('../../assets/success.wav');
  winMusic = new Audio('../../assets/win.wav');
  loseMusic = new Audio('../../assets/lose.wav');

  constructor() { }

  playStartMusic() {
    this.startMusic.play();
    this.startMusic.volume = .1;
  }

  playBackgroundMusic() {
    this.backgroundMusic.play();
    this.backgroundMusic.loop = true;
    this.backgroundMusic.volume = .05;
  }

  stopBackgroundMusic() {
    this.backgroundMusic.pause();
    this.backgroundMusic.currentTime = 0;
  }

  playFlipSound() {
    this.flipSound.play(); 
    this.flipSound.volume = .2;  
  }

  playSuccessSound() {
    this.successSound.play();
    this.successSound.volume = .1;
  }

  playWinMusic() {
    this.stopBackgroundMusic();
    this.winMusic.play();
    this.winMusic.volume = .05;
  }

  playLoseSound() {
    this.stopBackgroundMusic();
    this.loseMusic.play();
    this.loseMusic.volume = .1;
  }

}