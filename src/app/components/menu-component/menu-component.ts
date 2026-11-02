import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ServiceLogin } from '../../services/service-login';
import { Serie } from '../../models/serie';
import { ServiceSeries } from '../../services/service-series';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent implements OnInit {
  private _serviceAuth: ServiceLogin = inject(ServiceLogin);
  private _serviceSeries: ServiceSeries = inject(ServiceSeries);
  private _cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  public usuario = this._serviceAuth.usuarioIniciado;
  public series!: Array<Serie>;

  cerrarSesion(): void {
    this._serviceAuth.cerrarSesion();
  }

  ngOnInit(): void {
    this._serviceSeries.cargarSeries().subscribe((response) => {
      this.series = response;
      this._cdr.detectChanges();
    });
  }
}
