import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  { path: '', redirectTo: '/toprated-movies' , pathMatch: 'full'},
  { path: 'toprated-movies', component: TopRatedComponent, data:{
    title: 'Top Rated Movies '
  } },
  { path: 'upcoming-movies', component: UpcomingComponent, data:{
    title: 'Top Rated Movies '
  } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
