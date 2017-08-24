import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  // Run method during initialization
  ngOnInit(): void {
    this.getHeroes();
  }

  // Define variables and datatypes
  heroes: Hero[];
  selectedHero: Hero;

  // Constructor simultaneously defines a private heroService property and identifies it as a HeroService injection site
  constructor(
    private heroService: HeroService,
    private router: Router
    ) {}

  // Get a list of heroes
  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  // Goto a page with detail of a hero
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  // Add a hero
  add(name: string): void {
    name = name.trim();
    // If name is empty, return null
    if (!name) {return; }
    // If name is not empty, create the new hero
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  // Delete a hero
  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  // Assign selectedHero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
