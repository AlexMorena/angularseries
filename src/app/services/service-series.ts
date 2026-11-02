import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Serie } from "../models/serie";

@Injectable()

export class ServiceSeries{
    url = environment.urlApiSeries;

    constructor(
        private _http: HttpClient,
        private _router: Router
    ){}

    cargarSeries(): Observable<Serie[]>{
        let request = "api/series";
        let header = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get<Serie[]>(this.url + request, { headers: header })
    }

    cargarSerie(idSerie: number): Observable<Serie>{
        let request = "api/series/" + idSerie;
        let header = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get<Serie>(this.url + request, { headers: header });
    }
}