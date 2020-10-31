import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { RepositoryService } from '../../../shared/services/repository.service';
import { Movie } from '../../../interfaces/movie.model';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  public errorMessage: string = '';
  public movie: Movie;

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

  public deleteMovie = () => {
    const deleteUrl: string = `api/movie/${this.movie.id}`;
    this.repository.delete(deleteUrl)
      .subscribe(res => {
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        if (error.status == 200)
        {
          alert(`Succesfully deleted movie from the database`);
          this.router.navigate(['/movie/list']);
        }
      })
  }

  public redirectToMovieList() {
    this.router.navigate(['/movie/list']);
  }
}
