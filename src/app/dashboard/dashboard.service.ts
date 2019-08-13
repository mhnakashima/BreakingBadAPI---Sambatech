import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { pipe, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const API = 'https://breakingbadapi.com';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private http: HttpClient) { }

  public getCharacters(search?: string){

    let params;
    /*
      = inserir parametros para a paginação
    */

    if(search){
      params = new HttpHeaders();
      params.set('name', search);  
    }
  
    return this.http.get<any[]>(API + '/api/characters/')
          .pipe(
            tap(
              console.log
            )
          )
  }
}
