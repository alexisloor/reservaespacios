import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EspaciosdisponiblesComponent } from './estudiantes/espaciosdisponibles/espaciosdisponibles.component';
import { ReservashechasComponent } from './estudiantes/reservashechas/reservashechas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearespacioComponent } from './crearespacio/crearespacio.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'reservashechas', component: ReservashechasComponent }, // "Mis Reservas"
      { path: 'espaciosdisponibles', component: EspaciosdisponiblesComponent }, // "Espacios"
      { path: 'crearespacio', component: CrearespacioComponent }, // "Crear Espacio"
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
