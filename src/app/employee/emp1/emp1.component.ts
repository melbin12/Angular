import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../apicall.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrl: './emp1.component.css'
})
export class Emp1Component implements OnInit{
  // postArray: any[] = [];
  constructor(private serv:ApicallService){}
  public EmploDistArray:any[] = [];
  ngOnInit(): void {
    this.EmploDistArray = this.serv.getDistricts();
    console.log(this.EmploDistArray)
  }
}
