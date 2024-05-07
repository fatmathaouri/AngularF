import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../modelss/user.model';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:User={
    id:-1,
    nom_ut:"",
    prenom_ut:"",
    username:"",
    pass_ut:"",
   
    email:"",
    rolename:""
    
    
  }

  
  constructor (private router : Router,private authenticationService:AuthenticationService){}
  goToSignin(){
    this.authenticationService.register(this.user).subscribe(newUser=>{
      console.log("user added ")
      this.resetForm()
     
      
      

    this.router.navigate(['login'])
    }, error =>{
      console.log("erreur",error)
    }
  )
    
  }


  resetForm(){
    this.user={
      id:-1,
      nom_ut:"",
      prenom_ut:"",
      username:"",
      pass_ut:"",
     
      email:"",
      rolename:""

  }}

}
