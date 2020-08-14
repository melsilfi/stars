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
    //This function will keep the value of the hover position
    if (!this.clickedStar)
    this.rank = star.id;
  }

  initRankingAgain() {
    //This function will set the initial hover value again
    if (!this.clickedStar)
    this.rank = null;
  }

  sendStars(star) {
    //Once the user choose one star, I will keep the chosen value
    this.clickedStar = true;
    this.rank = star.id;
  }
}
