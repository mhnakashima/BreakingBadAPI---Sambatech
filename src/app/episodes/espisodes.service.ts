import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Episode } from '../api/episodes';

const API = 'https://breakingbadapi.com';

@Injectable({
  providedIn: 'root'
})
export class EspisodesService {

  constructor(private http: HttpClient) {}

  public getEpisodes(search?: string){

    return this.http.get<Episode[]>(API + '/api/episodes/')
          .pipe(
            tap(
              console.log
            )
          )
  }
}
