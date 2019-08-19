import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.name.toLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1);
  }
}
