import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  // styleUrls: ['./members.component.scss'],
  providers: [MemberService],
  styles: [`
    h1 {
      margin-left: 20px;
    }
    
    body {
      height: 100vh;
      background-color: #4b5247;
    }

    .members {
      background-color: #6e9159;
      border-radius: 5px;
      height: 300px;
      width: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      box-shadow: 2px 2px 2px black;
    }
    h2 {
      font-size: 36px;
    }

    .cards {
      justify-content: center;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
    }
  `],
})

export class MembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

constructor(private router: Router, private memberService: MemberService){}

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };
}
