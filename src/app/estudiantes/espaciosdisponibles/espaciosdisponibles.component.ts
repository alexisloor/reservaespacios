import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreareservaComponent } from 'src/app/creareserva/creareserva.component';

interface Espacio {
  id_espacio: number;
  nombre_espacio: string;
  descripcion: string;
  ubicacion: string;
  estado: string;
  imagen_url: string;
}



@Component({
  selector: 'app-espaciosdisponibles',
  templateUrl: './espaciosdisponibles.component.html',
  styleUrls: ['./espaciosdisponibles.component.css']
})
export class EspaciosdisponiblesComponent {

  espacios: any[] = []; 
  
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    // Obtener los espacios
    this.http.get<Espacio[]>('http://localhost/reservaespacios-backend/espacios.php')
      .subscribe((espacios: any[]) => {
        this.espacios = espacios;
      });
  }

  openReservaDialog(idEspacio: number): void {
    const dialogRef = this.dialog.open(CreareservaComponent, {
      width: '300px',
      data: { idEspacio: idEspacio }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Reserva completada con éxito');
        
      }
    });
  }

  verReservas(idEspacio: number) {
    const url = `http://localhost/reservaespacios-backend/ver_reservas.php?id_espacio=${idEspacio}`;
    window.location.href = url;  // Redirigir para descargar el archivo
  }



  


}