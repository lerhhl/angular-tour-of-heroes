// All imported services list below can be accessed from anywhere in the app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component'
import { HeroSearchComponent } from './hero-search.component'

// A component must be declared in a module before other components can reference it.
@NgModule({

  // View classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],

  // Other modules whose exported classes are needed by component templates declared in this module.
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],

  // Creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
  providers: [ HeroService ],

  // Main application view, called the root component, that hosts all other app views. Only the root module should set this bootstrap
  bootstrap: [AppComponent],

  // Subset of declarations that should be visible and usable in the component templates of other modules.
  exports: [],
})

export class AppModule {}
