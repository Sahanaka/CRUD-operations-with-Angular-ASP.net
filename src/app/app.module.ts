import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { MovieModule } from './models/movie/movie.module';
import { TvseriesModule } from './models/tvseries/tvseries/tvseries.module';
import { InternalServerComponent } from './components/error-pages/internal-server/internal-server.component';
import { SignupComponent } from './components/auth/signup/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    InternalServerComponent,
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: SigninComponent },
      { path: 'signup', component: SignupComponent},
      { path: 'home', component: HomeComponent },
      { path: "movie", loadChildren: () => import('./models/movie/movie.module').then(m => MovieModule)},
      { path: "tvseries", loadChildren: () => import('./models/tvseries/tvseries/tvseries.module').then(m => TvseriesModule)},
      { path: '404', component : NotFoundComponent},
      { path: '500', component: InternalServerComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full'}
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
