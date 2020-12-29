import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public  host:string="http://localhost:8080"
  constructor(private http:HttpClient) { }


  public getUsers(){
    return this.http.get(this.host+"/users")
  }
  public getRoles(){
    return this.http.get(this.host+"/roles")
  }

  public addRoleToUser(){
    return this.http.get(this.host+"/addRoleToUser")
  }
}
