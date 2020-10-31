import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../../../shared/services/repository.service';
import { Tvseries } from '../../../interfaces/tvseries.model';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvseries-list',
  templateUrl: './tvseries-list.component.html',
  styleUrls: ['./tvseries-list.component.css']
})
export class TvseriesListComponent implements OnInit {

  public errorMessage: string;
  public tvseries: Tvseries[];

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTvseries();
  }

  public getAllTvseries() {
    const URL: string = 'api/tvseries';
    this.repository.getData(URL).subscribe(
      res => {
        this.tvseries = res as Tvseries[];
      },
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      }
    )
  }

  public redirectToDeletePage = (id) => { 
    const deleteUrl: string = `tvseries/delete/${id}`; 
    this.router.navigate([deleteUrl]); 
  }

  public redirectToUpdatePage = (id) => { 
    const updateUrl: string = `tvseries/update/${id}`; 
    this.router.navigate([updateUrl]); 
  }
}
