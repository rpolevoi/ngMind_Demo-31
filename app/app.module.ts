import { HttpModule } from '@angular/http';
  
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { routing }  from './app.routing';

import { RouteAComponent } from './route_a/route_a.component';
import { RouteBComponent } from './route_b/route_b.component';
import { ChildComponent } from './route_a/child/child.component';

import { MemberService } from './member.service';


@NgModule({
  imports: [BrowserModule, HttpModule, routing],
  declarations: [
                AppComponent,
                RouteAComponent,
                RouteBComponent,
                ChildComponent 
                ],
  providers: [ MemberService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
