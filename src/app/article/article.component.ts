import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../article.service';
import { AuthenticationService } from '../authentication.service';
import { CommentService } from '../comment.service';
declare var $: any;
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  addComment: any;

  constructor(private articleService: ArticleService, private authService: AuthenticationService , private commentService:CommentService) { }
  confirmArtt() {
    $('#addM').modal('show');
  }

  closeAddd() {
    $('#addM').modal('hide');
  }

  onsubmit(form:NgForm) {
    console.log(form.value)
    this.articleService.addArticle(form).subscribe();
    $('#addM').modal('hide');
  

  }

  onsubmitt(form:NgForm) {
    console.log(form.value)
    this.commentService.addComment(form).subscribe();
    $('#addM').modal('hide');
  

  }


}
