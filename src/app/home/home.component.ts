import { Component } from '@angular/core';
import { User } from '../modelss/user.model';
import { ActualiteService } from '../actualite.service';
import { AuthenticationService } from '../authentication.service';
import { NgForm } from '@angular/forms';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser!: User;
  actualites!:any;
  accessToken!:any;
  

  ngOnInit(): void {
    const userAccessToken = localStorage.getItem('accessToken');
    const userData = localStorage.getItem('userAuth');//auth
    if (userData) {
   this.currentUser = JSON.parse(userData);

   this.accessToken = userAccessToken;//Auth
 } else {
   console.error('User data not found in local storage');
 }


    
  }
  constructor(private actualiteService: ActualiteService, private authService: AuthenticationService) { }

  
  confirmActt() {
    $('#addMo').modal('show');
  }

  closeActt() {
    $('#addMo').modal('hide');
  }

  onsubmit(form:NgForm) {
    console.log(form.value)
    this.actualiteService.addActualite(form).subscribe();
    $('#addMo').modal('hide');
    
  }

}
