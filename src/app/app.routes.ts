/*
import { Routes } from '@angular/router';

export const routes: Routes = [];
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ListBienImmobilierComponent } from './components/pages/list-bien-immobilier/list-bien-immobilier.component';
import { AddClientComponent } from './components/pages/add-client/add-client.component';
import { LoginClientComponent } from './components/pages/login-client/login-client.component';
import { ReservationBienComponent } from './components/pages/reservation-bien/reservation-bien.component';

export const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'listeProduct',component:ListBienImmobilierComponent},
  {path:'addAcount',component:AddClientComponent},
  {path:'login-client',component:LoginClientComponent},
  {path:'reservation-bien',component:ReservationBienComponent},

];
