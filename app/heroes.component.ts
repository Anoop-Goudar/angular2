import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { Router } from '@angular/router-deprecated';


@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  title = 'My Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  getHeroes() {
    this.heroes = this.heroService.getHeroes();
    //this.heroService.getHeroes().then(heroesResponse => this.heroes = heroesResponse);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: this.selectedHero.id }];
    this.router.navigate(link);
  }

}
