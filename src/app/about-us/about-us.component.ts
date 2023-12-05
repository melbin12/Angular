import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent  implements OnInit {
  
  postArray: any[] = [];
  constructor(private getApi: ApicallService) {}

  ngOnInit() {
    this.getApi.getPost().subscribe((res) => {
      this.postArray = res;
      console.log(res);
    });
  }
}
