import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cities } from '../models/cities.models';

@Injectable({
  providedIn: 'root'
})
export class CapitalsService {
  
  constructor(private _http: HttpClient) { }

  getMunicipios():Observable<Cities[]> {
    const url = environment.BaseUrl + 'municipios';
    return this._http.get<Cities[]>(url)
    
  }
}
