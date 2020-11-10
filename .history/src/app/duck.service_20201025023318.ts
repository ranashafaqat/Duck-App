import { HttpClient } from "@angular/common/http/src/client";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { DuckModel } from "./duck-model";

@Injectable({
  providedIn: "root",
})
export class DuckService {
  constructor(private http: HttpClient) {}

  getAllDucks(): Observable<DuckModel[]> {
    return this.http.get<any>("localhost:8082/api/duck/all").map((response) => {
      return JSON.parse(response.responseBody.data.pop());
    });
  }
}
