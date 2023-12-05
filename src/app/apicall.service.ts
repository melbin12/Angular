  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  @Injectable({
    providedIn: 'root'
  })
  export class ApicallService {

    constructor( private http:HttpClient) { }
    getPost(){
      return this.http.get<any>('http://localhost:8080/api/all');
    }
  }
