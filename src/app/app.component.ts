import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies';
  public upcomimgMovies:boolean = false;
}
