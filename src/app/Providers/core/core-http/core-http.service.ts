import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {

  constructor(private http: HttpClient) { }

  postRequest<TRequest, TResponse>(apiUrl: string, data: TRequest) {
    return this.http.post<TResponse>(apiUrl, data).pipe(
      tap(response => response)
    )
  }

  getRequest<TResponse>(apiUrl: string) {
    return this.http.get<TResponse>(apiUrl).pipe(
      tap(response => response)
    )
  }
}
