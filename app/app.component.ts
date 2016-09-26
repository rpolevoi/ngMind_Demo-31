import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from './member.service';


@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1>Parent View Here</h1>
          <p [style.color]="membServ.selected ? 'white' : 'lightgray'">current selection:</p>
          <p>{{ membServ.selected | json }} </p>
          <router-outlet></router-outlet>`,
  styleUrls: ['app.component.css']
})
export class AppComponent{

  constructor(private membServ: MemberService, private router: Router){}
  
}
