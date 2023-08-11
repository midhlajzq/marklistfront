import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  studentId:any=''
students:any={}
  constructor(private api:ServiceService,private route:ActivatedRoute){

  }
ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
      this.studentId=data.id

    })
    this.api.viewstudent(this.studentId).subscribe((result:any)=>{
this.students=result
    })

}
}

