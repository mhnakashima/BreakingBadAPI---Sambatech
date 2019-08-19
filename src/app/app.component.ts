import { Component, OnInit, OnChanges, Output  } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { CommunicationService } from './utils/communication.service';

const SEARCH_VALUE: string = "SEARCH_VAR";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges{
  
  public searchChar: string = '';

  public isCharacterView: boolean;

  constructor(private router: Router, private communicationService: CommunicationService){
    router.events.subscribe((val) => {
      this.updateSearchView();
    })
  }

  ngOnInit() {
    this.updateSearchView();
  }

  ngOnChanges(){
    this.updateSearchView();   
  }

  public updateSearchView(){
    this.isCharacterView = this.router.url == "/characters" || this.router.url == "/" ? true : false;
  }

  public onKey(value: string) {
    
    window.localStorage.setItem(SEARCH_VALUE, this.searchChar);
    this.communicationService.emitChange();
  }
}
