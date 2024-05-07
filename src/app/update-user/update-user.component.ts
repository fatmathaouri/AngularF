import { Component } from '@angular/core';
import { User } from '../modelss/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  user!:User;
  id!:number;
  accessToken:string = '';
  constructor(private userService:UserService, private route:ActivatedRoute){}

  ngOnInit(): void {
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
