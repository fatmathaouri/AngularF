import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './modelss/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl="http://localhost:8082/api/auth"
  constructor(private httpClient:HttpClient) { }
  login(loginDate:{username:String;pass_ut:String}):Observable<any>
  {
    return this.httpClient.post<any>(this.apiUrl+"/login",loginDate)
  }


  register(user:User):Observable<User>
  {
    return this.httpClient.post<User>(this.apiUrl+"/register",user)
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

 
}
