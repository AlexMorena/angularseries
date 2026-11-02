import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceLogin {
  url = environment.urlApiLogin;
  public usuarioIniciado = signal<Empleado | null>(null);
  constructor(private _http: HttpClient, private _router: Router) {}

  iniciarSesionToken(login: Login): Observable<any>{
    let request = 'auth/login';
    let json = JSON.stringify(login);
    let header = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + request, json, { headers: header });
  }

  obtenerToken(){
    return sessionStorage.getItem("TOKEN");
  }

  cargarPerfil(): Observable<Empleado>{
    let request = "api/empleados/perfilempleado";
    let token = this.obtenerToken();
    let header = { 'Authorization': 'Bearer ' + token };

   return this._http.get<Empleado>(this.url + request, { headers: header });
  }

  iniciarSesion(token: string){
    sessionStorage.setItem("TOKEN", token);
    this.cargarPerfil().subscribe(usuarioActivo => {
        this.usuarioIniciado.set(usuarioActivo);
    })
  }

  cerrarSesion(): void{
    sessionStorage.removeItem("TOKEN");
    this.usuarioIniciado.set(null);
    this._router.navigate(['/login'])
  }
}
