import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  styles: []
})
export class ClientComponent implements OnInit {
  formGroup: FormGroup
  clients: any = [];
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientServiceService
  ) { }

  ngOnInit() {
    this.clientService.getClients().subscribe(
      (data : any) =>{
        this.clients = data._embedded.clients;
      },
      (error) =>{
        this.clients = [
          { id: 1, nom_client: "frank", ville_client: "louenka@gmail.com", tel_client: 22 },
          { id: 1, nom_client: "tchatseu", ville_client: "tchatseu@gmail.com", tel_client: 24 },
          { id: 1, nom_client: "warren", ville_client: "warren@gmail.com", tel_client: 23 },
          { id: 1, nom_client: "junior", ville_client: "junior@gmail.com", tel_client: 24 },
          { id: 1, nom_client: "taba", ville_client: "taba@gmail.com", tel_client: 28 },
          { id: 1, nom_client: "sandra", ville_client: "sandra@gmail.com", tel_client: 30 },
        ];
      }
    )
    
    //initialisation du formularire
    this.initForm();
  }


  initForm() {
    this.formGroup = this.formBuilder.group(
      {
        nom_client: ['', [Validators.required]],
        ville_client: ['', [Validators.required]],
        tel_client: ['', [Validators.required]]
      }
    )
  }

  initFormWithData(client) {
    this.formGroup = this.formBuilder.group(
      {
        nom_client: [client.nom_client, [Validators.required]],
        ville_client: [client.ville_client, [Validators.required]],
        tel_client: [client.tel_client, [Validators.required]]
      }
    )
  }

  get form() {
    return this.formGroup.controls;
  }

  addClient() {
    const formData: FormData = new FormData();
    formData.append("nom_client", '' + this.form.nom_client.value);
    formData.append("ville_client", '' + this.form.ville_client.value)
    formData.append("tel_client", '' + this.form.tel_client.value)

    this.clientService.post(formData).then(
      (resp) => {
        console.log(resp)
      }
    ).catch(
      (err) => {
        console.log(err)
      }
    )
  }
  editOpen(client){
      this.initFormWithData(client)
  }
  addOpen(){
    this.initForm();
}
}
