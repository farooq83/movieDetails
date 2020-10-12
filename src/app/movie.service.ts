import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilm } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  movieUrl = 'http://localhost:3000/movies';

  getMovie(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.movieUrl);
  }

  /* { 
     return this.http.get(this.movieUrl);
  } */

}
