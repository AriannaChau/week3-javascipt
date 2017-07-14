import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.scss'],
  styles: [`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');

    h1 {
      margin-left: 20px;
    }

    body {
      height: 100vh;
      background-color: #4b5247;
    }

    .about {
      margin: 0 auto;
      font-size: 18px;
      width: 55%;

    }
    span {
      font-size: 21px;
      font-family: Playfair Display;
    }
  `],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
