import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../../shared/services/repository.service';
import { Movie } from '../../../interfaces/movie.model';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies: Movie[];
  public errorMessage: string = '';

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  public getAllMovies() {
    const URL: string = 'api/movie';
    this.repository.getData(URL).subscribe(
      res => {
        this.movies = res as Movie[];
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      }
    )
  }

  public redirectToDeletePage = (id) => { 
    const deleteUrl: string = `movie/delete/${id}`; 
    this.router.navigate([deleteUrl]); 
  }

  public redirectToUpdatePage = (id) => { 
    const updateUrl: string = `movie/update/${id}`; 
    this.router.navigate([updateUrl]); 
  }

}
