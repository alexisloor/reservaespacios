import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
  this.authService.login(this.email, this.password).subscribe(response => {
    if (response.message === 'Autenticación exitosa') {
      this.authService.saveSession(response.id_estudiante);
      this.router.navigate(['/dashboard']); 
    } else {
      alert(response.message);
    }
  }, error => {
    console.error('Error durante la autenticación', error);
    alert('Ocurrió un error durante la autenticación.');
  });
}

}
