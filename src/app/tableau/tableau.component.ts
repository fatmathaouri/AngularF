import { Component, OnInit } from '@angular/core';
import { User } from '../modelss/user.model';
import { EventService } from '../event.service';
import { ArticleService } from '../article.service';
import { ActualiteService } from '../actualite.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommentService } from '../comment.service';

declare var $:any;
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit{
  currentUser!: User;
  accessToken!:any;
  events!:any;
  articles!:any;
  actualites!:any;
  Users!:any;
  userToDelete!: User;
  eventToDelete!: any;
  articleToDelete!: any;
  actualiteToDelete!: any;
  comments!:any;
  commentaireToDelete!:any;
  private user:any=localStorage.getItem('userAuth')
  rolename=JSON.parse(this.user).rolename


  ngOnInit(): void {

    const userAccessToken = localStorage.getItem('accessToken'); //auth

    //user ou UserAuth
 //   const userData = localStorage.getItem('user');
    const userData = localStorage.getItem('userAuth');//auth
       if (userData) {
      this.currentUser = JSON.parse(userData);

      this.accessToken = userAccessToken;//Auth
    } else {
      console.error('User data not found in local storage');
    }


    this.getEvents(this.accessToken);
    this.getArticles(this.accessToken);
    this.getActualites(this.accessToken);
    this.getUsers(this.accessToken);
    this.getComments(this.accessToken);
  }

  constructor(private eventService:EventService,private articleService: ArticleService,private actualiteService:ActualiteService,private userService:UserService,private router:Router,private commentService:CommentService) { }
  
  getEvents(token: string): void {
    this.eventService.getAllEvents(token).subscribe(events=>{
      this.events=events
    })
    
  }

  
  
  getArticles(token: string): void {
    this.articleService.getAllArticles(token).subscribe(articles=>{
      this.articles=articles
    })
    
  }


  getActualites(token: string): void {
    this.actualiteService.getAllActualites(token).subscribe(actualites=>{
      this.actualites=actualites
    })
    
  }


  getUsers(token: string): void {
    this.userService.getAllUsers(token).subscribe(Users=>{
      this.Users=Users
    })
    
  }

  getComments(token: string): void {
    this.commentService.getAllComments(token).subscribe(comments=>{
      this.comments=comments
    })
    
  }
  


  confirmEvent(event: any): void {
    this.eventToDelete = event;
    $('#deleteEventModal').modal('show');
  }
  closeDeletee(): void {
    $('#deleteModal').modal('hide');
  }
  
  // Ajoutez une nouvelle méthode pour supprimer l'événement
  deleteEvent(): void {
    if (!this.accessToken) {
      console.error("Access token not found.");
      return;
    }
  
    if (!this.eventToDelete) {
      console.error("No event selected for deletion.");
      return;
    }
  
    this.eventService.deleteEvent(this.eventToDelete.idevenement, this.accessToken).subscribe(() => {
      console.log("Event deleted successfully.");
      // Mettre à jour la liste des événements après la suppression
      this.getEvents(this.accessToken);
      $('#deleteEventModal').modal('hide');
    }, error => {
      console.error("Error deleting event:", error);
    });
  }



  confirmArticle(article: any): void {
    this.articleToDelete = article;
    $('#deleteArticleModal').modal('show');
  }
  closeDeleteee(): void {
    $('#deleteModal').modal('hide');
  }
  
  // Ajoutez une nouvelle méthode pour supprimer l'article
  deleteArticle(): void {
    if (!this.accessToken) {
      console.error("Access token not found.");
      return;
    }
  
    if (!this.articleToDelete) {
      console.error("No article selected for deletion.");
      return;
    }
  
    this.articleService.deleteArticle(this.articleToDelete.id_article, this.accessToken).subscribe(() => {
      console.log("Article deleted successfully.");
      // Mettre à jour la liste des articles après la suppression
      this.getArticles(this.accessToken);
      $('#deleteArticleModal').modal('hide');
    }, error => {
      console.error("Error deleting article:", error);
    });
  }



  confirmActualite(actualite: any): void {
    this.actualiteToDelete = actualite;
    $('#deleteActualiteModal').modal('show');
  }
  closeDeleteeee(): void {
    $('#deleteModal').modal('hide');
  }
  
  // Ajoutez une nouvelle méthode pour supprimer l'actualite
  deleteActualite(): void {
    if (!this.accessToken) {
      console.error("Access token not found.");
      return;
    }
  
    if (!this.actualiteToDelete) {
      console.error("No actualite selected for deletion.");
      return;
    }
  
    this.actualiteService.deleteActualite(this.actualiteToDelete.id_actualite, this.accessToken).subscribe(() => {
      console.log("Actualite deleted successfully.");
      // Mettre à jour la liste des actualites après la suppression
      this.getActualites(this.accessToken);
      $('#deleteActualiteModal').modal('hide');
    }, error => {
      console.error("Error deleting actualite:", error);
    });
  }

  updateEvent(idevenement :number)
  {
  this.router.navigate(["/update",idevenement])
  }


  updateArticle(id_article:number){
    this.router.navigate(["/updatee",id_article])
  }

  updateActualite(id_actualite:number){
    this.router.navigate(["/updateee",id_actualite])
  }

  updateComment(commentId:number){
    this.router.navigate(["/updateComment",commentId])
  }
  


  confirmUser(user: User): void {
    this.userToDelete = user;
    $('#deleteModal').modal('show');
  }

  closeDelete(): void {
    $('#deleteModal').modal('hide');
  }

  deleteUser(): void {
    if (!this.accessToken) {
      console.error("Access token not found.");
      return;
    }

    if (!this.userToDelete) {
      console.error("No user selected for deletion.");
      return;
    }

    this.userService.deleteUser(this.userToDelete.id, this.accessToken).subscribe(() => {
      console.log("User deleted successfully.");
      // Mettre à jour la liste des utilisateurs après la suppression
      this.getUsers(this.accessToken);
      $('#deleteModal').modal('hide');
    }, error => {
      console.error("Error deleting user:", error);
    });
  }

  updateUser(id:number){
    this.router.navigate(["/updateuser",id])
  }


  confirmComment(commentaire: any): void {
    this.commentaireToDelete = commentaire;
    $('#deleteCommentModal').modal('show');
  }
  closeComment(): void {
    $('#deleteCommentModal').modal('hide');
  }
  
  // Ajoutez une nouvelle méthode pour supprimer l'actualite
  deleteComment(): void {
    if (!this.accessToken) {
      console.error("Access token not found.");
      return;
    }
  
    if (!this.commentaireToDelete) {
      console.error("No actualite selected for deletion.");
      return;
    }
  
    this.commentService.deleteComment(this.commentaireToDelete.commentId, this.accessToken).subscribe(() => {
      console.log("Actualite deleted successfully.");
      // Mettre à jour la liste des actualites après la suppression
      this.getComments(this.accessToken);
      $('#deleteCommentModal').modal('hide');
    }, error => {
      console.error("Error deleting actualite:", error);
    });
  }
  updateUserr(id:number){
    this.router.navigate(["/profile",id])
  }
}
