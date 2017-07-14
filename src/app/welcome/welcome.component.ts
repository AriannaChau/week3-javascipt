import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  // styleUrls: ['./welcome.component.scss']
  styles: [`
    body {
      height: 100vh;
      width: 100vw;
      margin: 0;
      padding: 0;
      background-image: url(/assets/images/hero.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      }
    #hero-title {
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 45px;
      color: white;
      text-shadow: 3px 4px 4px black;
    }
  `],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
