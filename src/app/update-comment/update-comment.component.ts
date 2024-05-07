import { Component } from '@angular/core';
import { commentaire } from '../modelss/commentaire.modal';
import { CommentService } from '../comment.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent {
  commentaire!:commentaire;
  commentId!:number;
  accessToken:string = '';

  constructor(private commentService:CommentService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.commentId=+this.route.snapshot.paramMap.get('commentId')!;
    this.accessToken = localStorage.getItem('accessToken') || '';
    this.getComment();
  }

  getComment() {
    this.commentService.getCommentById(this.commentId, this.accessToken).subscribe(commentt => {
      this.commentaire = commentt;
    });
  }

  confirmUpdateC(){
    $('#updateComment').modal('show');
  
  }
  
  
  
  closeUpdateC()
  {
    $('#updateComment').modal('hide');
  
  }
  
  updateC() {
    if (this.commentaire && this.accessToken) {
      this.commentService.updateComment(this.commentId, this.commentaire, this.accessToken).subscribe(updateArticle => {
        console.log("Update", updateArticle);
        $('#updateComment').modal('hide');
      });
    }
  }


}
