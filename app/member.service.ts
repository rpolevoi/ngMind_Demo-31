import { Member } from './member';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class MemberService {
  

  selected: Member;

  constructor(private http: Http) { } 
  
  getMembers(): Promise<Member[]> {
    return this.http.get('https://project-484930452002308078.firebaseio.com/members.json')
               .toPromise()
               .then(response => response.json())
               .catch(err => console.log(err));
  }
    
  getMember(id: number) {
    return this.http.get('https://project-484930452002308078.firebaseio.com/members.json?orderBy="id"&equalTo=' + id)
               .toPromise()
               .then(response => response.json())
               .catch(err => console.log(err) );
  }


}
