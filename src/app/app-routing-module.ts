import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './components/login-component/login-component';
import { SerieComponent } from './components/serie-component/serie-component';
import { CreatePersonajeComponent } from './components/create-personaje-component/create-personaje-component';
import { UpdatePersonajeComponent } from './components/update-personaje-component/update-personaje-component';
import { PersonajeComponent } from './components/personaje-component/personaje-component';

const routes: Routes = [
  {path: "", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "serie/:idSerie", component: SerieComponent, canActivate: [AuthGuard]},
  {path: "personaje", component: PersonajeComponent, canActivate: [AuthGuard]},
  {path: "create", component: CreatePersonajeComponent, canActivate: [AuthGuard]},
  {path: "update", component: UpdatePersonajeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  // 💡 ¡Añade { bindToComponentInputs: true } aquí dentro!
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }