import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { TvseriesForCreation } from '../../../interfaces/TvseriesForCreation.model';
import { RepositoryService } from '../../../shared/services/repository.service';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-tvseries-add',
  templateUrl: './tvseries-add.component.html',
  styleUrls: ['./tvseries-add.component.css']
})
export class TvseriesAddComponent implements OnInit {

  public errorMessage: string = '';
  public tvseriesForm: FormGroup;

  constructor(private router: Router, private repository: RepositoryService, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.tvseriesForm = new FormGroup(
      {
        name: new FormControl(""),
        genre: new FormControl(""),
        rating: new FormControl("")
      });
  }

  public addTvseries() {
    const tvseries: TvseriesForCreation =  {
      name: this.tvseriesForm.value.name,
      genre: this.tvseriesForm.value.genre,
      rating: this.tvseriesForm.value.rating,
      views: 1
    }

    const URL = 'api/tvseries';
    this.repository.create(URL, tvseries)
      .subscribe(res => {
      },
      (error => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        if (error.status == 200)
        {
          alert(`Succesfully added ${tvseries.name} to the database`);
          this.router.navigate(['/tvseries/list']);
        }
      })
    )
  }

  public redirectToTvseriesList(){
    this.router.navigate(['/tvseries/list']);
  }

}
