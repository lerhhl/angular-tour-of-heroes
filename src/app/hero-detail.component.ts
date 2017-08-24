import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap'; // To use with route parameters Obervable

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ){}

  ngOnInit(): void {
  // id is a number but route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  // Save details of a hero
  save(): void {
    this.heroService.update(this.hero)
        .then(() => this.goBack());
  }

  // Goto previous page
  goBack(): void {
    this.location.back();
  }

  @Input() hero: Hero;
}
