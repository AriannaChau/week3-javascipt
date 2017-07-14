import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  members: Member[] = [

   new Member("Arianna Chau", 22,
       "Trillium Lake"),

   new Member("Steven Galvin", 23,
       "Mirror Lake"),

   new Member("Taylor Almond", 22,
       "Mystic Falls"),

   new Member("McKenzie Engelgau", 22,
       "Angels Rest"),

   new Member("Carrie Lewis", 46,
       "Little ZigZag Falls"),
 ];

  constructor() { }

  ngOnInit() {
  }

}
