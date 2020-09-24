import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styles: []
})
export class CarnetComponent implements OnInit {
  clients: any;
  errorMessage: any = null;
  constructor(
    private clientService: ClientServiceService
  ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      (data : any) =>{
        this.clients = data._embedded.clients;
      },
      (error) =>{
        this.errorMessage = error.error.message;
        console.log(this.errorMessage);
      }
    )
  }

}
