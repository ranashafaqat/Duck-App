import { HttpClient } from "@angular/common/http/src/client";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operator/map";
import { DuckModel } from "./duck-model";

@Injectable({
  providedIn: "root",
})
export class DuckService {
  constructor(private http: HttpClient) {}

  getAllDucks(): Observable<DuckModel[]> {
    return this.http
      .get<DuckModel[]>("localhost:8082/api/duck/all")
      .map((response) => {
        return response.map((duck) => new DuckModel(duck));
      });
  }
}
