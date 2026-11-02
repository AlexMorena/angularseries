import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ServiceLogin } from '../../services/service-login';
import { Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent {
  @ViewChild("cajausuario") cajaUsuario!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(
    private _serviceAuth: ServiceLogin,
    private _router: Router
  ){}

  login(){
    let usuario = this.cajaUsuario.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;
    let login = new Login(usuario, password);

    this._serviceAuth.iniciarSesionToken(login).subscribe(response => {
      this._serviceAuth.iniciarSesion(response.response);
      this._router.navigate(['/']);
    })
  }
}
