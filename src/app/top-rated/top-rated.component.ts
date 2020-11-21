import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {ApiserviceService} from 'src/app/apiservice.service'
import {Moviesdata} from 'src/app/models/toprated.model'

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  constructor(private apiservice:ApiserviceService , private spinner:NgxSpinnerService) { }
  public imageUrl ="https://image.tmdb.org/t/p/w500"
  results:any=[];
  ratedMovies:Moviesdata[] =[];

  ngOnInit(): void {
    this.topMoives();
  }
  topMoives(){
    this.spinner.show();
    this.apiservice.getToprated().subscribe((res:any) =>{
      this.ratedMovies = res.results;
      this.spinner.hide();
      console.log(res);
    },
    err=>{
      console.log("error");
    }
  );
  }

}
