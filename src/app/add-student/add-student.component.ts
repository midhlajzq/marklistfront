import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  addStudent:any;
constructor(private fb:FormBuilder,private routes:Router, private api:ServiceService){
  this.addStudent =fb.group({
    no:['',Validators.required],
    name:['',Validators.required],
    mark:['',Validators.required]

  })
}
onSubmit(){
this.api.addstudent(this.addStudent.value).subscribe((data)=>{
  console.log(data);
  this.routes.navigate([''])
  
})
}



}
