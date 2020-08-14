import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
   stars = [{id:1},{id:2},{id:3},{id:4},{id:5}];
   rank : number = 0;
   clickedStar : boolean = false;
   rankingText: string = 'Our ranking is';
  constructor() { }

  ngOnInit(): void {
  }

  getRanking(star) {
    if (!this.clickedStar)
    this.rank = star.id;
  }

  initRankingAgain() {
    if (!this.clickedStar)
    this.rank = null;
  }

  sendStars(star) {
    this.clickedStar = true;
    this.rank = star.id;
  }
}
