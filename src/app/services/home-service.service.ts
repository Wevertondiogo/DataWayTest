import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { States } from '../models/States.model';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

   url: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

  constructor(private _http: HttpClient) { }

  getStates(): Observable<States[]> {
    return this._http.get<States[]>(this.url);
  }
}
