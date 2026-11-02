import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ServiceSeries } from '../../services/service-series';
import { Serie } from '../../models/serie';

@Component({
  selector: 'app-serie-component',
  standalone: false,
  styleUrl: './serie-component.css',
  templateUrl: './serie-component.html',
})
export class SerieComponent implements OnInit {
  @Input() idSerie!: string;
  public serie!: Serie;
  constructor(
    private _serviceSerie: ServiceSeries,
    private _cdr: ChangeDetectorRef,
  ) {}

  cargarSerieComponent(): void {
    let idSerieNumero = parseInt(this.idSerie);
    this._serviceSerie.cargarSerie(idSerieNumero).subscribe((response) => {
      this.serie = response;
      this._cdr.detectChanges();
    });
  }

  ngOnInit(): void {
    this.cargarSerieComponent();
  }
}
