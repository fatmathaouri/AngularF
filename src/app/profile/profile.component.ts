import { Component, OnInit } from '@angular/core';
import { User } from '../modelss/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
declare var $:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser!: User;
  accessToken!:any;
  user!:User;
  id!:number;
  selectedFile: File | null = null;
  
  constructor(private userService:UserService, private route:ActivatedRoute ,private http: HttpClient){}

  ngOnInit(): void {

    const userAccessToken = localStorage.getItem('accessToken'); //auth

    //user ou UserAuth
 //   const userData = localStorage.getItem('user');
    const userData = localStorage.getItem('userAuth');//auth
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;//Auth
    } else {
      console.error('User data not found in local storage');
    }
    this.id=+this.route.snapshot.paramMap.get('id')!;
    this.accessToken = localStorage.getItem('accessToken') || '';
    this.getUser();
  }
  getUser() {
    this.userService.getUserById(this.id, this.accessToken).subscribe(userr => {
      this.user = userr;
    })
  }

  confirmUpdateUser(){
    $('#updateModall').modal('show');
  
  }
  
  
  
  closeUpdateUser()
  {
    $('#updateModall').modal('hide');
  
  }
  
  updateUser() {
    if (this.user && this.accessToken) {
      this.userService.updateUser(this.id, this.user, this.accessToken).subscribe(updateUser => {
        console.log("Update", updateUser);
       
        $('#updateModall').modal('hide');
      });
    }
  }

  



 

}
