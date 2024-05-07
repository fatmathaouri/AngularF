import { Component } from '@angular/core';
import { article } from '../modelss/article.modal';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent {

  article!:article;
  id_article!:number;
  accessToken:string = '';

  constructor(private articleService:ArticleService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id_article=+this.route.snapshot.paramMap.get('id_article')!;
    this.accessToken = localStorage.getItem('accessToken') || '';
    this.getArticle();
  }

  getArticle() {
    this.articleService.getArticleById(this.id_article, this.accessToken).subscribe(articlee => {
      this.article = articlee;
    });
  }

  confirmUpdateA(){
    $('#updateArticle').modal('show');
  
  }
  
  
  
  closeUpdateA()
  {
    $('#updateArticle').modal('hide');
  
  }
  
  updateA() {
    if (this.article && this.accessToken) {
      this.articleService.updateArticle(this.id_article, this.article, this.accessToken).subscribe(updateArticle => {
        console.log("Update", updateArticle);
        $('#updateArticle').modal('hide');
      });
    }
  }

}
