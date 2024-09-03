import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

interface Reserva {
  id_reserva: number;
  id_estudiante: string;
  id_espacio: number;
  nombre_equipo: string;
  fecha_reserva: string;
  hora_inicio: string;
  hora_fin: string;
}

interface Espacio {
  id_espacio: number;
  nombre_espacio: string;
  descripcion: string;
  ubicacion: string;
  estado: string;
  imagen_url: string;
}



@Component({
  selector: 'app-reservashechas',
  templateUrl: './reservashechas.component.html',
  styleUrls: ['./reservashechas.component.css']
})
export class ReservashechasComponent {

  reservasConEspacio: any[] = []; 
  numeroReservas: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Reserva[]>('http://localhost/reservaespacios-backend/reservas_por_estudiante.php?id_estudiante=201912318')
      .pipe(
        mergeMap(reservas => {
          
          const espacioRequests = reservas.map(reserva =>
            this.http.get<Espacio>(`http://localhost/reservaespacios-backend/espacio_por_id.php?id_espacio=${reserva.id_espacio}`)
              .pipe(
                map(espacio => ({ ...reserva, ...espacio })) 
              )
          );
          return forkJoin(espacioRequests); 
        })
      )
      .subscribe((reservasConEspacio: any[]) => {
        this.reservasConEspacio = reservasConEspacio;
      });
  }

  deleteReserva(idReserva: number): void {
    const idEstudiante = sessionStorage.getItem('id_estudiante'); 
    const payload = {
      id_estudiante: idEstudiante,
      id_reserva: idReserva
    };
  
    this.http.post('http://localhost/reservaespacios-backend/eliminar_reserva.php', payload)
      .subscribe(response => {
        alert('Reserva eliminada con éxito');
        
      }, error => {
        console.error('Error al eliminar la reserva:', error);
        alert('Ocurrió un error al intentar eliminar la reserva.');
      });
  }

  


}