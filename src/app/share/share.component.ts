import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  shares=[];

  constructor(private apiServices:ApiService) { }

  ngOnInit(){
    this.apiServices.getShare().subscribe((data: any[])=>{
      console.log(data);
      this.shares = data.data;
     })
  }
}

