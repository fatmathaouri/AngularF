import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { article } from './modelss/article.modal';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl="http://localhost:8082/"
  private user:any =  localStorage.getItem('userAuth')

  constructor(private httpClient:HttpClient) { }

  getAllArticles(token :string): Observable<article[]>{
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + token
    });
    return this.httpClient.get<article[]>(this.apiUrl + "getAllArticles", { headers });

  }


  
  
  deleteArticle(id_article: number, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    // Assurez-vous d'inclure les en-têtes dans la requête DELETE
    return this.httpClient.delete(this.apiUrl + "deleteArticle/" + id_article, { headers });
  }



  updateArticle(id_article: number, article: article, accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken,
      "Content-Type": "application/json" // Assurez-vous de définir le type de contenu
    });
    return this.httpClient.put(this.apiUrl + "updateArticle/" + id_article, article, { headers });
  }


  getArticleById(id_article: number, accessToken: string): Observable<article> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + accessToken
    });
    return this.httpClient.get<article>(this.apiUrl + "getArticleById/" + id_article, { headers });
  }

  addArticle( article: NgForm): Observable<article> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      'Content-Type': 'application/json'
    });
    console.log(JSON.parse(this.user).id)
    return this.httpClient.post<article>(this.apiUrl+ "addArticle/"+JSON.parse(this.user).id, article.value, { headers });
  }

}
