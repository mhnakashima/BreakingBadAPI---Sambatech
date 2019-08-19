

import { Component, OnInit, AfterViewInit, ElementRef, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardService } from './dashboard.service';

import { CharacterStatusPipe } from './../utils/character-status.pipe';
import { ActivatedRoute, Router } from '@angular/router';

import { Character } from './../api/character';
import { EventEmitter } from 'events';
import { CommunicationService } from '../utils/communication.service';

const SEARCH_VALUE: string = "SEARCH_VAR";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public searchDashValue: string = null;

  public searchChar: string = '';

  public characterList: Character[] = [];
  public originalList:  Character[] = [];
  public menuList: any[] = [
      { 
        name: 'Alive',
        isSelected: false,
      }, 
      {
        name: 'Presumed dead',
        isSelected: false,
      },
      {
        name: 'Deceased',
        isSelected: false
      },
      {
        name: 'Todos',
        isSelected: false
      }
    ];

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute,  
              private dashboardService: DashboardService,
              private communicationService: CommunicationService,
              private elementRef: ElementRef
              ) { 

                communicationService.changeEmitted$.subscribe(data => {
                  // here fetch data from the session storage 
                  this.searchDashValue = window.localStorage.getItem(SEARCH_VALUE);
                })
              }

  ngOnInit() {
    this.dashboardService
          .getCharacters()
            .subscribe( chars => {
              this.characterList = this.originalList = chars;
            })
  }

  ngAfterViewInit(){
    
  }

  public getValue(value){
    console.log("Value", value);
  }
  
  public applyFilter(status?:string){
    
    this.menuList.forEach(menu => {

      if(status == menu.name){
        menu.isSelected = true;
      }else{
        menu.isSelected = false;
      }
    })

    this.characterList = this.originalList;
    this.characterList = this.characterList.filter(item =>{
      
      return status == undefined || status == 'Todos' ? item : item.status == status;
    })
  }

  
}
