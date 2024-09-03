import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost/reservaespacios-backend'; 

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login.php`, { email, password });
  }

  logout(): void {
    sessionStorage.removeItem('id_estudiante');
  }

  saveSession(id_estudiante: string): void {
    sessionStorage.setItem('id_estudiante', id_estudiante);
  }

  getSession(): string | null {
    return sessionStorage.getItem('id_estudiante');
  }
  
}
