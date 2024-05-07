import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actualite } from './modelss/actualite.modal';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  private apiUrl="http://localhost:8082/"
  private user:any =  localStorage.getItem('userAuth')

  constructor(private httpClient:HttpClient) { }

  getAllActualites(token :string): Observable<actualite[]>{
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + token
    });
    return this.httpClient.get<actualite[]>(this.apiUrl + "getAllAcualités", { headers });

  }

  deleteActualite(id_actualite: number, token: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + token
    });
    return this.httpClient.delete(this.apiUrl + "deleteAcualité/" + id_actualite, { headers });
  }


  updateActualite(id_actualite: number, actualite: actualite, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken,
      "Content-Type": "application/json" // Assurez-vous de définir le type de contenu
    });
    return this.httpClient.put(this.apiUrl + "updateAcualité/" + id_actualite, actualite, { headers });
  }


  getActualiteById(id_actualite: number, accessToken: string): Observable<actualite> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    return this.httpClient.get<actualite>(this.apiUrl + "getActualiteById/" + id_actualite, { headers });
  }

  addActualite( actualite: NgForm): Observable<actualite> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    });
    console.log(JSON.parse(this.user).id)
    return this.httpClient.post<actualite>(this.apiUrl+ "addAcualité/"+JSON.parse(this.user).id, actualite.value, { headers });
  }

}
