
import { Character } from './../api/character';
import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';

import { CharacterStatusPipe } from './../utils/character-status.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public characterList: Character[] = [];
  public originalList:  Character[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService
          .getCharacters()
            .subscribe( chars => {
              this.characterList = this.originalList = chars;
            })
  }

  applyFilter(status?:string){

    this.characterList = this.originalList;
    this.characterList = this.characterList.filter(item =>{
      
      return status == undefined ? item : item.status == status;
    })
  }
}
