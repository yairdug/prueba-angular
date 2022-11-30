import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) {

   }
   newestDisplay:any = [];
   
  ngOnInit(): void {
    this._services.newestNews().subscribe((result)=>{
      this.newestDisplay= result.articles;
    })
  }

}
