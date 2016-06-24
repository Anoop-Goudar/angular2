import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { DashboardComponent } from './dashboard.component';

@Component ({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}
