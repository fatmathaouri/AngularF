import { Component } from '@angular/core';
import { actualite } from '../modelss/actualite.modal';
import { ActualiteService } from '../actualite.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-update-actualite',
  templateUrl: './update-actualite.component.html',
  styleUrls: ['./update-actualite.component.css']
})
export class UpdateActualiteComponent {

  actualite!:actualite;
  id_actualite!:number;
  accessToken:string = '';

  constructor(private actualiteService:ActualiteService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id_actualite=+this.route.snapshot.paramMap.get('id_actualite')!;
    this.accessToken = localStorage.getItem('accessToken') || '';
    this.getActualite();
  }

  getActualite() {
    this.actualiteService.getActualiteById(this.id_actualite, this.accessToken).subscribe(actualitee => {
      this.actualite = actualitee;
    });
  }


  confirmUpdateAc(){
    $('#updateActualite').modal('show');
  
  }
  
  
  
  closeUpdateAc()
  {
    $('#updateActualite').modal('hide');
  
  }
  
  updateAc() {
    if (this.actualite && this.accessToken) {
      this.actualiteService.updateActualite(this.id_actualite, this.actualite, this.accessToken).subscribe(updateActualite => {
        console.log("Update", updateActualite);
        $('#updateActualite').modal('hide');
      });
    }
  }

}
