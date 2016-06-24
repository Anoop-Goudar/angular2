import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()

export class HeroService {
  getHeroes() {
    //return Promise.resolve(HEROES);
    return HEROES;
  }
  getHero(id: number) {
    return HEROES.filter(hero => hero.id === id)[0];
  }
}
