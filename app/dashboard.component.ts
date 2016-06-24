import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  directives: [HeroDetailComponent],
  providers: [HeroService]

})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this.heroService.getHeroes().slice(1,5);
    //this.heroService.getHeroes().then(heroesResponse => this.heroes = heroesResponse.slice(1,5));
  }

  gotoDetail(hero: Hero) { this.selectedHero = hero; }

}
