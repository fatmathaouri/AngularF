import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forminput!: FormGroup;
  username: string = "";
  pass_ut: string = "";

  constructor(private router: Router, private formBuilder: FormBuilder, private authService:AuthenticationService) { }
  ngOnInit(): void {
    this.forminput = this.formBuilder.group({
      'username': ['', [Validators.required]],
      'pass_ut': ['', [Validators.required]]
    });
  }

  goToHome() {
    if (this.forminput.invalid) {
      return;
    }

    const loginData = this.forminput.value;
    this.authService.login(loginData).subscribe(response => {
      
      const userData= {username:response.user.username,
        email:response.user.email,
        rolename:response.user.rolename,
        id:response.user.id,
        imageURL:response.user.imageURL
      }
      localStorage.setItem("userAuth", JSON.stringify(userData));

      const accessToken = response.accessToken;

      localStorage.setItem("accessToken", accessToken);

      alert("Connecté");
      console.log("Connecté");
      this.router.navigate(["loading"])
    });

}}
