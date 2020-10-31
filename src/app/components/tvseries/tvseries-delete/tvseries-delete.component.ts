import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { RepositoryService } from '../../../shared/services/repository.service';
import { Tvseries } from '../../../interfaces/tvseries.model';


@Component({
  selector: 'app-tvseries-delete',
  templateUrl: './tvseries-delete.component.html',
  styleUrls: ['./tvseries-delete.component.css']
})
export class TvseriesDeleteComponent implements OnInit {

  public errorMessage: string = '';
  public tvseries: Tvseries;

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

  public deleteTvseries = () => {
    const deleteUrl: string = `api/tvseries/${this.tvseries.id}`;
    this.repository.delete(deleteUrl)
      .subscribe(res => {
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
        if (error.status == 200)
        {
          alert(`Succesfully deleted from the database`);
          this.router.navigate(['/tvseries/list']);
        }
      })
  }

  public redirectToTvseriesList() {
    this.router.navigate(['/tvseries/list']);
  }
}
