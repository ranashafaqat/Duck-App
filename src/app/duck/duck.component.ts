import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Duck } from '../duck';
import { DuckModel } from '../duck-model';
import { DuckService } from '../duck.service';

@Component({
  selector: 'app-duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.css']
})
export class DuckComponent implements OnInit {

  duck: Duck = new DuckModel();
  duckId: number;
  constructor(
    private duckService: DuckService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    this.duck = new DuckModel();
    this.duckService.pullDuck().subscribe(duck => {
      this.duck = duck;
      console.log(this.duck)
    });
    this.duckId = this.activatedRoute.snapshot.params.id;
    this.duckService.getDuck(this.duckId).subscribe(duck => this.duck = duck);
  }




  updateDuck() {
    this.duckService.updateDuck(this.duck).subscribe(duck => {
        this.duckService.pushHideDetai(true);
    });
  }
}
