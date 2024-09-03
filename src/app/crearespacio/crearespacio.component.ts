import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crearespacio',
  templateUrl: './crearespacio.component.html',
  styleUrls: ['./crearespacio.component.css']
})
export class CrearespacioComponent {

  espacioForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.espacioForm = this.fb.group({
      nombreEspacio: ['', Validators.required],
      descripcion: ['', Validators.required],
      ubicacion: ['', Validators.required],
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  crearEspacio(): void {
    const formData = new FormData();
    formData.append('nombre_espacio', this.espacioForm.get('nombreEspacio')?.value);
    formData.append('descripcion', this.espacioForm.get('descripcion')?.value);
    formData.append('ubicacion', this.espacioForm.get('ubicacion')?.value);
    
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile, this.selectedFile.name);
    }

    this.http.post('http://localhost/reservaespacios-backend/crear_espacio.php', formData)
      .subscribe(response => {
        alert('¡Espacio creado con éxito!');
        this.espacioForm.reset(); 
      }, error => {
        console.error('Error al crear el espacio:', error);
        alert('Ocurrió un error al intentar crear el espacio.');
      });
  }
}
