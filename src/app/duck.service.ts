import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Duck } from './duck';
import { DuckModel } from "./duck-model";

@Injectable({
  providedIn: "root",
})
export class DuckService {

  private duck = new Subject<Duck>();
  private hideRoute = new Subject<Boolean>();

  constructor(private http: HttpClient) {}

  getAllDucks(): Observable<Duck[]> {
    return this.http.get<any>("http://localhost:8080/api/duck/all").pipe(
      map((response) => {
        return response.map((duck) => new DuckModel(duck));
      })
    );
  }

  getDuck(duckId: number): Observable<Duck> {
    return this.http.get<any>("http://localhost:8080/api/duck/" + duckId).pipe(
      map((response) => {
        return new DuckModel(response);
      })
    );
  }

  saveDuck(duck: Duck): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/duck", duck).pipe(
      map((response) => {
        return response;
      })
    );
  }

  deleteDuck(duckId: number): Observable<any> {
    return this.http.delete<any>("http://localhost:8080/api/duck/" + duckId).pipe(
      map((response) => {
        return response;
      })
    );
  }

  updateDuck(duck: Duck): Observable<any> {
    return this.http.put<any>("http://localhost:8080/api/duck/" + duck.getId(), duck).pipe(
      map((response) => {
        return response;
      })
    );
  }

  public pullDuck(): Observable<Duck> {
    return this.duck.asObservable();
  }

  public pushDuck(duck: Duck) {
    this.duck.next(duck);
  }

  public pullHideDetail(): Observable<Boolean> {
    return this.hideRoute.asObservable();
  }

  public pushHideDetai(hideDetail: boolean) {
    this.hideRoute.next(true);
  }
}
