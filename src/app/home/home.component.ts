import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { datamodel } from './model';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeform!: FormGroup;
  data:undefined|datamodel[];


  constructor(private formbuilder: FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      phonenumber: ['', Validators.required],
    })
    this.getemployee();
  }
  addemployee(data:datamodel){
  //console.log(data)
  this.api.addemployee(data).subscribe((res=>{
  this.employeeform.reset();  
  }))
}
getemployee(){
  
  this.api.getemployee().subscribe(res=>{
  this.data=res;  
  })
}
}