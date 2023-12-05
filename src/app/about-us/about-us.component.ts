import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent  implements OnInit {
  
  postArray: any[] = [];//postArray is declared as a class property with the type any[], indicating that it's an array that can contain elements of any type.
  constructor(private getApi: ApicallService) {}

  ngOnInit() {
    this.getApi.getPost().subscribe((res) => {
      this.postArray = res;
      console.log(res);
    });
  }
}
