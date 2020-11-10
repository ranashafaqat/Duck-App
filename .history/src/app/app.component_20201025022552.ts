import { Component } from "@angular/core";
import { DuckModel } from "./duck-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  duck_type: string;
  duckModel: DuckModel;

  title = "Duck-App";
}
