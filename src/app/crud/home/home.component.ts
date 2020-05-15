import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import {Shares} from '../shares';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shares: Shares[] = [];

  constructor(public curdService:CrudService) { }

  ngOnInit() {
    this.curdService.getAll().subscribe((data: Shares[])=>{
      console.log(data);
      this.shares = data;
    })  
  }

}
