

import { Routes, RouterModule } from '@angular/router';

import { RouteAComponent } from './route_a/route_a.component';
import { RouteBComponent } from './route_b/route_b.component';


export const routes: Routes = [
  {path: '', component: RouteAComponent},
  {path: 'routeA', component: RouteAComponent},
  {path: 'routeB/:id', component: RouteBComponent}
];


export const routing = RouterModule.forRoot(routes);
