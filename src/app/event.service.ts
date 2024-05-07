import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evenement } from './modelss/event.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl="http://localhost:8082/"
  private user:any =  localStorage.getItem('userAuth')

  constructor(private httpClient:HttpClient) { }

  getAllEvents(token :string): Observable<evenement[]>{
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + token
    });
    return this.httpClient.get<evenement[]>(this.apiUrl + "getAllEvenements", { headers });

  }

  deleteEvent(idevenement: number, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    // Assurez-vous d'inclure les en-têtes dans la requête DELETE
    return this.httpClient.delete(this.apiUrl + "deleteEvenement/" + idevenement, { headers });
  }


  updateEvent(idevenement: number, event: evenement, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken,
      "Content-Type": "application/json" // Assurez-vous de définir le type de contenu
    });
    return this.httpClient.put(this.apiUrl + "updateEvenement/" + idevenement, event, { headers });
  }


  getEventById(idevenement: number, accessToken: string): Observable<evenement> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    return this.httpClient.get<evenement>(this.apiUrl + "getEvenementById/" + idevenement, { headers });
  }

  addEvenement( evenement: NgForm): Observable<evenement> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    });
    console.log(JSON.parse(this.user).id)
    return this.httpClient.post<evenement>(this.apiUrl+ "addEvenement/"+JSON.parse(this.user).id, evenement.value, { headers });
  }
  
}
