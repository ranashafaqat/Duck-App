import { HttpClient } from '@angular/common/http/src/client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DuckService {

  constructor(
    private http: HttpClient,
  ) {

    getAllDucks(): Observable<DuckModel[]> {
      return this.http
      .post<any>(ENV.apiUrl + '/api/finance/currency', {
        sourceCurrency: sourceCurrency,
        targetCurrency: targetCurrency,
      })
      .map((response) => {
        return JSON.parse(response.responseBody.data.pop());
      })
      .catch((err) => {
        return this.handleError(err);
      });
    }

   }
}
