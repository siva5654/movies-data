import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {ApiserviceService} from 'src/app/apiservice.service'


@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
public comingmovies:any =[];
public imageUrl ="https://image.tmdb.org/t/p/w500"

  constructor(private apiservice:ApiserviceService , private spinner:NgxSpinnerService) { }


  ngOnInit(): void {
    this.upcomingMoives();
  }
  upcomingMoives(){
    this.spinner.show();
    this.apiservice.getupcoming().subscribe((res:any) => {
      this.comingmovies = res.results;
      this.spinner.hide();
      console.log(res.results)
    },
    err=>{
      console.log("error");
    }
  );
  }
}
