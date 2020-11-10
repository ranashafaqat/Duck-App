import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Duck } from './duck';
import { DuckModel } from "./duck-model";
import { DuckService } from "./duck.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  duck_type: string;
  duckModel: Duck = new DuckModel();
  ducks: Duck[] = [];
  hideBottom = true;

  title = "Duck-App";

  constructor(private duckService: DuckService,
    private router: Router) {}

  ngOnInit(): void {
    this.getAllDucks();

    this.duckService.pullHideDetail().subscribe(hide => {
      this.hideBottom = true;
      this.getAllDucks();
    })
  }

  getAllDucks() {
    this.duckService.getAllDucks().subscribe((ducks) => {
      this.ducks = ducks;
    });
  }

   submitDuck(duckType: string) {
    this.duckModel.name = duckType;
    this.duckService.saveDuck(this.duckModel).subscribe((res) => {
      this.getAllDucks();
    });
  }

  // submitDuck() {
  //   this.duckModel.name = this.duck_type;
  //   this.duckService.saveDuck(this.duckModel).subscribe((res) => {
  //     this.getAllDucks();
  //   });
  // }

  deleteDuck(duckId: number) {
    this.duckService.deleteDuck(duckId).subscribe(res => {
      this.getAllDucks();
    });
  }

  editDuck(duck: Duck) {
    this.hideBottom = false;
    this.duckService.pushDuck(duck);
  }
}