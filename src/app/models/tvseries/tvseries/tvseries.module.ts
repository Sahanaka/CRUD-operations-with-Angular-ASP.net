import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TvseriesListComponent } from '../../../components/tvseries/tvseries-list/tvseries-list.component';
import { TvseriesAddComponent } from '../../../components/tvseries/tvseries-add/tvseries-add.component';
import { TvseriesDeleteComponent } from '../../../components/tvseries/tvseries-delete/tvseries-delete.component';
import { TvseriesUpdateComponent } from '../../../components/tvseries/tvseries-update/tvseries-update.component';


@NgModule({
  declarations: [
    TvseriesListComponent,
    TvseriesAddComponent,
    TvseriesDeleteComponent,
    TvseriesUpdateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'list', component: TvseriesListComponent },
      { path: 'add', component: TvseriesAddComponent },
      { path: 'delete/:id', component: TvseriesDeleteComponent },
      { path: 'update/:id', component: TvseriesUpdateComponent }
    ])
  ]
})
export class TvseriesModule { }
