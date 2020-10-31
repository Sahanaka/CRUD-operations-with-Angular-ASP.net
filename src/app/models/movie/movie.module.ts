import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MovieListComponent } from '../../components/movie/movie-list/movie-list.component';
import { MovieAddComponent } from 'src/app/components/movie/movie-add/movie-add.component';
import { MovieDeleteComponent} from '../../components/movie/movie-delete/movie-delete.component';
import { MovieUpdateComponent } from 'src/app/components/movie/movie-update/movie-update.component';
import { MenuComponent } from '../../components/menu/menu.component';



@NgModule({
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'list', component: MovieListComponent },
      { path: 'add', component: MovieAddComponent },
      { path: 'delete/:id', component: MovieDeleteComponent },
      { path: 'update/:id', component: MovieUpdateComponent }
    ])
  ],
  declarations: [
    MovieListComponent,
    MovieAddComponent,
    //MenuComponent,
  ]
})
export class MovieModule { }
