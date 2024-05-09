import { Component } from '@angular/core';
import { User } from '../modelss/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  currentUser!: User;
  accessToken!:any;
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

}
