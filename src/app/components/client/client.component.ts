import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styles: []
})
export class ClientComponent implements OnInit {

  clients: any =[];
  constructor() { }

  ngOnInit() {
    this.clients =[
      {id:1, name:"frank", email:"louenka@gmail.com", age:22},
      {id:1, name:"tchatseu", email:"tchatseu@gmail.com", age:24},
      {id:1, name:"warren", email:"warren@gmail.com", age:23},
      {id:1, name:"junior", email:"junior@gmail.com", age:24},
      {id:1, name:"taba", email:"taba@gmail.com", age:28},
      {id:1, name:"sandra", email:"sandra@gmail.com", age:30},
    ];
  }

}
