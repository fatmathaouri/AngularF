import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { commentaire } from './modelss/commentaire.modal';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private apiUrl="http://localhost:8082/"
  private user:any =  localStorage.getItem('userAuth')

  constructor(private httpClient:HttpClient) { }

  getAllComments(token :string): Observable<commentaire[]>{
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + token
    });
    return this.httpClient.get<commentaire[]>(this.apiUrl + "getAllComments", { headers });

  }

  deleteComment(commentId: number, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    // Assurez-vous d'inclure les en-têtes dans la requête DELETE
    return this.httpClient.delete(this.apiUrl + "deleteCommentaire/" + commentId, { headers });
  }

  updateComment(commentId: number, comment:commentaire, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken,
      "Content-Type": "application/json" // Assurez-vous de définir le type de contenu
    });
    return this.httpClient.put(this.apiUrl + "updateCommentaire/" + commentId, comment, { headers });
  }


  getCommentById(commentId: number, accessToken: string): Observable<commentaire> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    return this.httpClient.get<commentaire>(this.apiUrl + "getCommentaireById/" + commentId, { headers });
  }

  addComment( commentaire: NgForm): Observable<commentaire> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    });
    console.log(JSON.parse(this.user).id)
    return this.httpClient.post<commentaire>(this.apiUrl+ "addCommentaire/user/{userId}/evenement/{idevenement}/"+JSON.parse(this.user).id, commentaire.value, { headers });
  }
}
