import { Component, OnInit } from '@angular/core';
import { User } from '../modelss/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {
  currentUser!: User;
  accessToken!:any;
  constructor(private userService:UserService){}
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
  
  }
  loggout(){
    this.userService.loggout()
  }


}
