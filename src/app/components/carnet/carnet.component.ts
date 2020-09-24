import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styles: []
})
export class CarnetComponent implements OnInit {
  clients: any;
  constructor(
    private clientService: ClientServiceService
  ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      (data) =>{
        this.clients = data;
        console.log(this.clients)
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
