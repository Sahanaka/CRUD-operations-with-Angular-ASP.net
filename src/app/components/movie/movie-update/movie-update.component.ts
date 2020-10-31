import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { RepositoryService } from '../../../shared/services/repository.service';
import { Movie } from '../../../interfaces/movie.model';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

  public errorMessage: string = '';
  public movie: Movie;
  public rating: number;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.geMovieById();
  }

  private geMovieById = () => {
    const movieId: string = this.activeRoute.snapshot.params['id'];
    const movieByIdUrl: string = `api/movie/${movieId}`;
    this.repository.getData(movieByIdUrl)
      .subscribe(res => {
        this.movie = res as Movie;
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }

  public addRating(newRating: number) {
    this.rating = newRating;
  }

  public redirectToMovieList() {
    this.router.navigate(['/movie/list']);
  }

  public updateMovie() {
    const movieId: string = this.activeRoute.snapshot.params['id'];
    const URL: string = `api/movie/${movieId}/${this.rating}`;
    this.repository.update(URL)
      .subscribe(res => {
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        if (error.status == 200)
        {
          alert(`Rating Successful`);
          this.router.navigate(['/movie/list']);
        }
      })
  }

}
