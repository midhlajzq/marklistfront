import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
allstudents:any=[]
constructor(private api:ServiceService){

}
ngOnInit(): void {
    this.getAllStudent()
}
getAllStudent(){
  this.api.getallstudents()
    
  .subscribe((result:any)=>{
    // result is all conact array from api
    console.log(result);
    this.allstudents = result
    
  })
}
deleteContact(studentId:any){
  this.api.removestudent(studentId)
  .subscribe((data:any)=>{
   this.getAllStudent()
  })
}
}
