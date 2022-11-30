import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-localnews',
  templateUrl: './localnews.component.html',
  styleUrls: ['./localnews.component.css']
})
export class LocalnewsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  localnewsDisplay:any = [];
  
  ngOnInit(): void {
    this._services.localNews().subscribe((result)=>{
      this.localnewsDisplay = result.articles;
    })
  }

}
