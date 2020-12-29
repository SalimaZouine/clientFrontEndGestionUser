import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../services/auth-service.service';
import {RoleUserForm} from '../RoleUserForm';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selecteduser : any;

  RoleUserForm : RoleUserForm = new RoleUserForm();
  submitted = false;
  public roles: any;
  public users: any;
  constructor( public authservice: AuthServiceService) { }

  ngOnInit(): void {

    this.authservice.getUsers()
      .subscribe(data =>{
        this.users=data;
      },error => {
        console.log(error)
      })


    this.authservice.getRoles()
      .subscribe(data =>{
        this.roles=data;
      },error => {
        console.log(error)
      })
  }
  newRoleUserForm(): void {
    this.submitted = false;
    this.RoleUserForm = new RoleUserForm();
  }

  addRoleToUser() {
    this.authservice.addRoleToUser()
      .subscribe(data => {
          console.log(data)
          this.RoleUserForm = new RoleUserForm();
        },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.addRoleToUser();

}




}

