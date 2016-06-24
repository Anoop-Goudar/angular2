import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  providers: [HeroService]

})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes().slice(1,5);
    //this.heroService.getHeroes().then(heroesResponse => this.heroes = heroesResponse.slice(1,5));
  }

}
