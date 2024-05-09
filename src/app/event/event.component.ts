import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventService } from '../event.service';
import { AuthenticationService } from '../authentication.service';
declare var $: any;
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  constructor(private eventService: EventService, private authService: AuthenticationService) { }
  confirmAdd() {
    $('#addModal').modal('show');
  }

  closeAdd() {
    $('#addModal').modal('hide');
  }

  onsubmit(form:NgForm) {
    console.log(form.value)
    this.eventService.addEvenement(form).subscribe();
    $('#addModal').modal('hide');
  }

}
