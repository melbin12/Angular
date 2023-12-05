import { Component } from '@angular/core';
import { FormBuilder,FormArray } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

get alternativeEmails(){
  return this.registration.get('alternativeEmails') as FormArray
}
addAlternativeEmail(){
  console.log('alternativeEmails',this.alternativeEmails)
  this.alternativeEmails.push(this.fb.control(''))
}
// onSubmitedd(values){
//   console.log(values.value)
// }
constructor(private fb:FormBuilder){}
registration =this.fb.group({
  email:['It mastr=er'],
  alternativeEmails:this.fb.array([])
})
data: any = { firstname: '' ,
              lastname:'',
              email:'',
              phone:''
}; // Initialize with default values

onSubmit() {
  console.log('Form submitted:', this.data);
  // Add your form submission logic here
  alert(JSON.stringify(this.data))
}
}
