import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { MovieForCreation } from '../../../interfaces/movieForCreation.model';
import { RepositoryService } from '../../../shared/services/repository.service';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  public errorMessage: string = '';
  public movieForm: FormGroup;

  constructor(private router: Router, private repository: RepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.movieForm = new FormGroup(
      {
        name: new FormControl(""),
        genre: new FormControl(""),
        rating: new FormControl("")
      });
  }

  public validateControl = (controlName: string) => {
    if (this.movieForm.controls[controlName].invalid && this.movieForm.controls[controlName].touched)
      return true;
    return false;
  }

  public hasError = (controlName: string, errorName: string) => {
    if (this.movieForm.controls[controlName].hasError(errorName))
      return true;
    return false;
  }

  public redirectToMovieList(){
    this.router.navigate(['/movie/list']);
  }

  public addMovie() {
    const movie: MovieForCreation =  {
      name: this.movieForm.value.name,
      genre: this.movieForm.value.genre,
      rating: this.movieForm.value.rating,
      views: 1
    }

    const URL = 'api/movie';
    this.repository.create(URL, movie)
      .subscribe(res => {
      },
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
          if (error.status == 200)
          {
            alert(`Succesfully added ${movie.name} to the database`);
            this.router.navigate(['/movie/list']);
          }
      })
    )
  }

}
