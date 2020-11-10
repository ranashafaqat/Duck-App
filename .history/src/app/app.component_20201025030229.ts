import { Component, OnInit } from "@angular/core";
import { DuckModel } from "./duck-model";
import { DuckService } from "./duck.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  duck_type: string;
  duckModel: DuckModel;
  ducks: DuckModel[] = [];

  title = "Duck-App";

  constructor(private duckService: DuckService) {}

  ngOnInit(): void {
    this.duckService.getAllDucks().subscribe((ducks) => {
      this.ducks = ducks;
    });
  }

  submitDuck() {
    this.duckModel.name = this.duck_type;
    this.duckService.saveDuck(this.duckModel).subscribe(res) => {
    });
  }
}
