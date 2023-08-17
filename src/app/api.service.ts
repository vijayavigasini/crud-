import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './home/model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
//add employee
addemployee(data:datamodel){
return this.http.post<datamodel>("http://localhost:3000/posts",data)
}
//get employee
getemployee(){
  return this.http.get<datamodel[]>("http://localhost:3000/posts");
  }
}
