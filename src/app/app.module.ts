import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EspaciosdisponiblesComponent } from './estudiantes/espaciosdisponibles/espaciosdisponibles.component';
import { ReservashechasComponent } from './estudiantes/reservashechas/reservashechas.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CreareservaComponent } from './creareserva/creareserva.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'; // Necesario para <mat-form-field>
import { MatInputModule } from '@angular/material/input'; // Necesario para <mat-input>
import { MatDatepickerModule } from '@angular/material/datepicker'; // Necesario para <mat-datepicker>
import { MatNativeDateModule } from '@angular/material/core'; // Necesario para usar la fecha nativa con el datepicker
import { MatButtonModule } from '@angular/material/button'; // Necesario para <mat-button>
import { CrearespacioComponent } from './crearespacio/crearespacio.component';


@NgModule({
  declarations: [
    AppComponent,  
    LoginComponent, EspaciosdisponiblesComponent, ReservashechasComponent, SidebarComponent, DashboardComponent, CrearespacioComponent,CreareservaComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    HttpClientModule, 
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
