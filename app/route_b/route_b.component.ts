import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  moduleId: module.id,
  template: `<h1>Route B View Here</h1>
        <h3>{{selected.name}} from {{selected.city}}, {{selected.country}} -- id: {{selected.id}}</h3>
        <button (click)="toList()">To List (Route A)</button>`,
  styleUrls: ['route_b.component.css']
})
export class RouteBComponent implements OnInit {

  selected = {}; // must be assigned something, even empty object
  
  toList() {
    this.router.navigate(['routeA']);
  }
  
  constructor(private membServ: MemberService,
              private route: ActivatedRoute,
              private router: Router){}
              
  ngOnInit() {
    
     this.membServ.getMember(this.route.snapshot.params['id'])
     .then(obj => {let key =Object.keys(obj)[0]; return obj[key];})
     .then(mem => this.selected = this.membServ.selected = mem);
  }

}

