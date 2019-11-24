import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;  // 変数定義 Hero 型

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  // メソッド作成　引数は hero 変数。型は Hero 型 app/hero.ts で定義
  onSelect(hero: Hero): void {
    this.selectedHero = hero;   // 定義した selectedHero 変数に、onSelect イベントで取得した値を代入
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
