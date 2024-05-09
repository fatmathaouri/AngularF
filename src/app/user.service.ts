import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modelss/user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl="http://localhost:8082/"

  constructor(private httpClient:HttpClient ,private router : Router) { }

  getAllUsers(token :string): Observable<User[]>{
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + token
    });
    return this.httpClient.get<User[]>(this.apiUrl + "getAllUserss", { headers });

  }

  deleteUser(id: number, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    // Assurez-vous d'inclure les en-têtes dans la requête DELETE
    return this.httpClient.delete(this.apiUrl + "deleteuser/" + id, { headers });
  }

  updateUser(id: number, user: User, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken,
      "Content-Type": "application/json" // Assurez-vous de définir le type de contenu
    });
    return this.httpClient.put(this.apiUrl + "updateUser/" + id, user, { headers });
  }


  getUserById(id: number, accessToken: string): Observable<User> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    return this.httpClient.get<User>(this.apiUrl + "getUserById/" + id, { headers });
  }
  loggout(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userAuth');
    this.router.navigate(['/']);
  }
}
