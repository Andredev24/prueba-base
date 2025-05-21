import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://localhost:7290/api/Solicitudes/listar'; // Reemplaza con tu URL real

  constructor(private http: HttpClient) {}

  // obtenerDatos(param1: string, param2: string): Observable<any> {
  //   const params = new HttpParams()
  //     .set('solicitud', param1??'')
  //     .set('documento', param2??'');

  //   return this.http.get<any>(this.apiUrl, { params });
  // }

  obtenerDatos(param1: string, param2: string): Observable<any> {
    const body = {
      solicitud: param1 ?? '',
      documento: param2 ?? '',
    };

    return this.http.post<any>(this.apiUrl, body);
  }
}
