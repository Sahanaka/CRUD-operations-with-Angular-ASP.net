import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { RepositoryService } from '../../../shared/services/repository.service';
import { Tvseries } from '../../../interfaces/tvseries.model';

@Component({
  selector: 'app-tvseries-update',
  templateUrl: './tvseries-update.component.html',
  styleUrls: ['./tvseries-update.component.css']
})
export class TvseriesUpdateComponent implements OnInit {

  public errorMessage: string = '';
  public tvseries: Tvseries;
  public rating: number;

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTvseriesById();
  }

  private getTvseriesById = () => {
    const tvseriesId: string = this.activeRoute.snapshot.params['id'];
    const tvseriesByIdUrl: string = `api/tvseries/${tvseriesId}`;
    this.repository.getData(tvseriesByIdUrl)
      .subscribe(res => {
        this.tvseries = res as Tvseries;
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      })
  }

  public addRating(newRating: number) {
    this.rating = newRating;
  }

  public redirectToTvseriesList() {
    this.router.navigate(['/tvseries/list']);
  }

  public updateTvseries() {
    const tvseriesId: string = this.activeRoute.snapshot.params['id'];
    const URL: string = `api/tvseries/${tvseriesId}/${this.rating}`;
    this.repository.update(URL)
      .subscribe(res => {
        alert("Succesfully rated the tvseries");
        this.redirectToTvseriesList();
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        if (error.status == 200)
        {
          alert(`Rating successful`);
          this.router.navigate(['/tvseries/list']);
        }
      })
  }

}
