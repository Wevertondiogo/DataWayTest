import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { States } from '../models/States.model';
import { environment } from 'src/environments/environment';
import { Cities } from '../models/cities.models';

import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

   httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    })
  };

  constructor(private _http: HttpClient) { }

  getStates(): Observable<States[]> {
    const url = environment.BaseUrl + 'estados'
    return this._http.get<States[]>(url);
  }

  getCityById(id: number): Observable<Cities[]> {
    const url = `${environment.BaseUrl}estados/${id}/municipios`
    return this._http.get<Cities[]>(url);
  }

  setLocale(id): Observable<any> {
    const url = `${ environment.BaseLocaleUrl}/${environment.KEY_API}/locales`;
    console.log("localeId[]="+id)
    return this._http.put(url, "localeId[]="+id, this.httpOptions)
  }
}
