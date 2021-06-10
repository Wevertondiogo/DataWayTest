import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { States } from '../models/States.model';
import { environment } from 'src/environments/environment';
import { Cities } from '../models/cities.models';

import { HttpHeaders } from '@angular/common/http';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  /* httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
    })
  };
*/

JsonUrlCities = environment.Json_Api + 'cities'
UrlStates = environment.BaseUrl + 'estados/'

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
  constructor(private _http: HttpClient) { }

  getStates(): Observable<States[]> {
    return this._http.get<States[]>(this.UrlStates).pipe(retry(2), catchError(this.handleError))
  }

  getCityById(id: number): Observable<Cities[]> {
    const url = `${this.UrlStates}${id}/municipios`
    return this._http.get<Cities[]>(url).pipe(retry(2), catchError(this.handleError))
  }

  /*setLocale(id): Observable<any> {
    const url = `${ environment.BaseLocaleUrl}/${environment.KEY_API}/locales`;
    console.log("localeId[]="+id)
    return this._http.put(url, "localeId[]="+id, this.httpOptions)
  }*/

  setCityInHistoric(city: Cities): Observable<Cities> {
    return this._http.post<Cities>(this.JsonUrlCities, JSON.stringify(city), this.httpOptions).pipe(retry(2), catchError(this.handleError))
  }

  getCityInHistoric(): Observable<Cities[]> {
    return this._http.get<Cities[]>(this.JsonUrlCities).pipe(retry(2), catchError(this.handleError))
  }

  handleError(Exception: HttpErrorResponse) {
    let errorMessage = '';
    if (Exception.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = Exception.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${Exception.status}, menssagem: ${Exception.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
