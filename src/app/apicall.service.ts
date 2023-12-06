  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  @Injectable({
    providedIn: 'root'
  })
  export class ApicallService {

    constructor( private http:HttpClient) { }
    // getPost(){
    //   return this.http.get<any>('http://localhost:8080/api/all');
    // }

    getBooking(data :any){
      return this.http.post<any>('http://localhost:8080/api/savebooking',data)
    }



    public array= [
      { id: 1, name: 'Thiruvananthapuram' },
      { id: 2, name: 'Kollam' },
      { id: 3, name: 'Pathanamthitta' },
      { id: 4, name: 'Alappuzha' },
      { id: 5, name: 'Kottayam' },
      { id: 6, name: 'Idukki' },
      { id: 7, name: 'Ernakulam' },
      { id: 8, name: 'Thrissur' },
      { id: 9, name: 'Palakkad' },
      { id: 10, name: 'Malappuram' },
      { id: 11, name: 'Kozhikode' },
      { id: 12, name: 'Wayanad' },
      { id: 13, name: 'Kannur' },
      { id: 14, name: 'Kasaragod' },
    ];

    getDistricts(){
      return<any>(this.array)
    }
  }
