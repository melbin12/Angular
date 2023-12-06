import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-postmapping',
  templateUrl: './postmapping.component.html',
  styleUrl: './postmapping.component.css'
})
export class PostmappingComponent {
  onSubmit(){
    console.log(this.data)
    this.bookingServices.getBooking(this.data).subscribe((res)=>{
      console.log(res)
    })
  }
  
constructor(private bookingServices:ApicallService){}
  data={
    bookid: null,
    facilities: {
        facid: null,
        name: '',
        membercost: null,
        guestcost: null,
        initialoutlay: null,
        monthlymaintenance: null,
        bookings: null
    },
    members: {
        memid: null,
        surname: '',
        firstname: '',
        address: '',
        zipcode: null,
        telephone: '',
        recommendedby: null,
        joindate: "2022-08-10T09:30:00.000+00:00",
        bookings: null
    },
    starttime: "2022-08-10T13:15:00.000+00:00",
    slots: null,
    facid: null,
    name: '',
    membercost: null,
    guestcost: null,
    initialoutlay: null,
    monthlymaintenance: null,
    memid: null,
    surname: '',
    firstname: '',
    address: '',
    zipcode: null,
    telephone: '',
    recommendedby: null,
    joindate: null
}

}
