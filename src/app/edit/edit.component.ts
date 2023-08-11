import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  addStudent:any;
  id:any;
constructor(private fb:FormBuilder,private routes:Router, private api:ServiceService,private url:ActivatedRoute){
  this.addStudent =fb.group({
    no:['',Validators.required],
    name:['',Validators.required],
    mark:['',Validators.required]

  })
}
ngOnInit(): void {
  this.id=this.url.snapshot.params['id']
    this.api.viewstudent(this.id).subscribe(data=>{
      this.addStudent.patchValue(data);
    })
}

onSubmit(){
this.api.updateStudent(this.id,this.addStudent.value).subscribe((data)=>{
  console.log(data);
  this.routes.navigate([''])
  
})
}



}
