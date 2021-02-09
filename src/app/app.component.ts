import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Duck } from './duck';
import { DuckModel } from "./duck-model";
import { DuckService } from "./duck.service";
import { LastActions } from './last-actions';

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
  duckChildType: string;
  lastActions: LastActions;
  isDucksVisible: boolean;

  title = "Duck-App";

  constructor(private duckService: DuckService,
    private router: Router) {
      
    }

  ngOnInit(): void {
    
    this.getAllDucks();

    this.duckService.pullHideDetail().subscribe(hide => {
      this.hideBottom = true;
      this.getAllDucks();
    })
  }

  getAllDucks() {
    this.isDucksVisible = true;
    this.duckService.getAllDucks().subscribe((ducks) => {
      this.ducks = ducks;
      this.getLastActions();
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
    this.router.navigate(['duck', duck.getId()])
    this.hideBottom = false;
    this.duckService.pushDuck(duck);
  }

  setFly(duck: Duck) {
    duck.setFlying(true);
  }

  playAudio(audioSource: string){
    let audio = new Audio();
    audio.src = audioSource;
    audio.load();
    audio.play();
  }
  
  setQuack(duck: Duck) {
    this.playAudio(duck.getSound());
  }



  addGrid() {
    this.duckService.addDuckLayout().subscribe(added => this.getAllDucks());
  }

  addDuckChild(duckId: number, duckType: string) {
    
    const duck: Duck = new DuckModel();
    duck.name = duckType;
    this.duckService.addDuckChild(duckId, duck).subscribe(added => this.getAllDucks());
  }

  updateDuckShape(duck: Duck) {
    duck.setShapeLevel();
    this.duckService.updateDuck(duck).subscribe(dk => {this.getAllDucks()});    
  }

  implementAction(actonType: String) {
    this.duckService.implementAction(actonType).subscribe(ducks => {
      this.ducks = ducks;
      this.getLastActions();
    });
  }

  getLastActions() {
    this.duckService.getLastActions().subscribe(actions => {
        this.lastActions = actions;
    });
  }

  createNewList() {
    this.duckService.clearDuckList().subscribe(action => {
        this.ducks = [];
    });
  }

  removeDucks() {
    this.ducks = [];
    this.isDucksVisible = false;
  }


}
