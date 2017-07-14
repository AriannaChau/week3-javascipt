import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.scss'],
  styles: [`
    .body {
      background-color: blue;
    }
  `],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
