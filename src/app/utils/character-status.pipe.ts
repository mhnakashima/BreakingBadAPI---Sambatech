import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterStatus'
})
export class CharacterStatusPipe implements PipeTransform {

  transform(value: any): any {
    
    switch(value){
      case "Alive":
        return "alive";
      break;
      
      case "Deceased":
        return "deceased";
      break;

      case "Presumed dead":
        return "deceased";
      break;
    }
  }

}
