import { Component } from '@angular/core';
import { evenement } from '../modelss/event.model';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {

  evenement!:evenement;
  idevenement!:number;
  accessToken:string = '';
  constructor(private eventService:EventService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.idevenement=+this.route.snapshot.paramMap.get('idevenement')!;
    this.accessToken = localStorage.getItem('accessToken') || '';
    this.getEvent();
  }
  getEvent() {
    this.eventService.getEventById(this.idevenement, this.accessToken).subscribe(eventt => {
      this.evenement = eventt;
    });
  }

  confirmUpdate(){
    $('#updateModal').modal('show');
  
  }
  
  
  
  closeUpdate()
  {
    $('#updateModal').modal('hide');
  
  }
  
  updateEvent() {
    if (this.evenement && this.accessToken) {
      this.eventService.updateEvent(this.idevenement, this.evenement, this.accessToken).subscribe(updateEvent => {
        console.log("Update", updateEvent);
        $('#updateModal').modal('hide');
      });
    }
  }


}
