import { Component, OnInit } from '@angular/core';

import {NewsapiservicesService} from '../service/newsapiservices.service'


@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css']
})
export class TopheadlineComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }
//displaydata
topheadingDisplay:any = [];





  ngOnInit(): void {

this._services.topHeading().subscribe((result: any)=>{
  console.log(result);
this.topheadingDisplay = result.articles;




})



  }

}
