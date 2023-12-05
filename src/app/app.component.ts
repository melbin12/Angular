import { Component } from '@angular/core';
import { ApicallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
//  postArray=[]
//   constructor( private getApi: ApicallService) {
   
//     this.getApi.getPost().subscribe((res)=>{
//       this.postArray=res
//       console.log(res)
//     })  //subcribe
//   }

  

  public fruits=[
    {"name":"orange","price":100},
    {"name":"apple","price":200},
    {"name":"kiwi","price":400},
    {"name":"apple","price":200},


  ]
  
}