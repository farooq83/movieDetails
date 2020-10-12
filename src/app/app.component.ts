import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searching';
  public movies = [];
  constructor(private _movieService: MovieService) { }
  ngOnInit() {
    this._movieService.getMovie()
      .subscribe(data => {
        this.movies = data;
        console.log(this.movies, 'movies')
      })
  }
}
