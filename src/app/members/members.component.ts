import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})

export class MembersComponent implements OnInit {

constructor(private router: Router){}

  members: Member[] = [

   new Member("Arianna Chau", 22,
       "Trillium Lake", 1),

   new Member("Carrie Lewis", 46,
      "Little ZigZag Falls", 2),

   new Member("Steven Galvin", 23,
       "Mirror Lake", 3),

   new Member("Taylor Almond", 22,
       "Mystic Falls", 4),

   new Member("McKenzie Engelgau", 22,
       "Angels Rest", 5),

   new Member("Nate Cheney", 30,
       "Triple Falls", 6),
 ];

 goToDetailPage(clickedMember: Member) {
   this.router.navigate(['members', clickedMember.id]);
 };

  ngOnInit() {
  }

}
