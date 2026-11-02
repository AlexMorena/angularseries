import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { LoginComponent } from './components/login-component/login-component';
import { SerieComponent } from './components/serie-component/serie-component';
import { PersonajeComponent } from './components/personaje-component/personaje-component';
import { CreatePersonajeComponent } from './components/create-personaje-component/create-personaje-component';
import { UpdatePersonajeComponent } from './components/update-personaje-component/update-personaje-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AuthGuard } from './guards/auth-guard';
import { ServiceLogin } from './services/service-login';
import { ServiceSeries } from './services/service-series';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    SerieComponent,
    PersonajeComponent,
    CreatePersonajeComponent,
    UpdatePersonajeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthGuard,provideBrowserGlobalErrorListeners(), provideHttpClient(), ServiceLogin, ServiceSeries],
  bootstrap: [App],
})
export class AppModule {}
