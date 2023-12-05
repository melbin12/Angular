import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myForm: FormGroup;
  languages: any[] = ['Malayalam', 'Hindi', 'English'];
  submitted = false;
  insertedData: any[] = [];
  constructor(private fb: FormBuilder,private router:Router) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      number: ['', Validators.pattern('^[0-9]*$')],
      language: ['', Validators.required]
    });
    // gotoContact(){
    //   this.router.navigate(['contact-us'])
    // }
    //subcribe
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.insertedData.push(formData);
    } else {
    console.log('Form is not valid');
    }
  }

}