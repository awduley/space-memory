import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class CardComponent implements OnInit {
  @Input() cardsArray: number;

  @Output() flipAction = new EventEmitter<boolean>();

  cardFlip: boolean = false;
  appendedUrl: string = 'https://robohash.org/';

  constructor(private audioService: AudioService) {  
    
  } 

  ngOnInit() {
    
  }

  doesFlip() {
    this.cardFlip = ! this.cardFlip;
    this.flipAction.emit(this.cardFlip);
    this.audioService.playFlipSound();
  }  
}
