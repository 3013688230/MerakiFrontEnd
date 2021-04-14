import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface LoginForm{
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /*login(loginForm: LoginForm) {
    return this.http.post<any>('/api/users/login', { email: loginForm.email, password: loginForm.password }).pipe(
      map((token) => {
        console.log('token');
        localStorage.setItem('meraki-token', token.access_token);
        return token;
      })
    )
  }*/

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, httpOptions);
  }

  registro(nombre: string, email: string, celular: string, documento: string, ciudad: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      nombre,
      email,
      celular,
      documento,
      ciudad,
      password
    }, httpOptions);
  }
}
