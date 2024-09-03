import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import * as moment from 'moment';

interface ReservaResponse {
  message: string;
}

@Component({
  selector: 'app-creareserva',
  templateUrl: './creareserva.component.html',
  styleUrls: ['./creareserva.component.css']
})
export class CreareservaComponent {

  reservaForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreareservaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.reservaForm = this.fb.group({
      nombreEquipo: ['', Validators.required],
      fechaReserva: ['', Validators.required],
      horaInicio: ['', Validators.required],
      horaFin: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  reservar(): void {

    const formData = this.reservaForm.value;

    const fechaReserva = moment(formData.fechaReserva).format('YYYY-MM-DD');
    const horaInicio = moment(formData.horaInicio, 'HH:mm').format('HH:mm:ss');
    const horaFin = moment(formData.horaFin, 'HH:mm').format('HH:mm:ss');


    const reserva = {
      id_estudiante: this.authService.getSession(), 
      id_espacio: this.data.idEspacio, 
      nombre_equipo: this.reservaForm.value.nombreEquipo,
      fecha_reserva: fechaReserva,
      hora_inicio: horaInicio,
      hora_fin: horaFin
    };

    this.http.post<ReservaResponse>('http://localhost/reservaespacios-backend/reservas.php', reserva)
  .subscribe(response => {
    if (response.message === 'Reserva creada con éxito') {
      alert('¡Reserva realizada con éxito!');
      this.dialogRef.close(true);
    } else {
      alert('No se pudo realizar la reserva: ' + response.message);
    }
  }, error => {
    console.error('Error al realizar la reserva:', error);
    alert('Ocurrió un error al intentar realizar la reserva.');
  });
  }

}
