import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  // styleUrls: ['./member-detail.component.scss'],
  providers: [MemberService],
  styles: [`
    h1 {
      margin-left: 20px;
    }
    body {
      height: 100vh;
      background-color: #4b5247;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #detail {
      background-color: #6e9159;
      border-radius: 5px;
      box-shadow: 2px 2px 2px black;
      height: 200px;
      width: 200px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    }
  `],
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
  });
    this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }
}
