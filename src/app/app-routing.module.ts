import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { CarnetComponent } from './components/carnet/carnet.component';


const routes: Routes = [
  {path: 'client', component: ClientComponent},
  {path: 'carnet' , component: CarnetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
