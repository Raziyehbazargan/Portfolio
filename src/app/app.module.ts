
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { BioComponent }  from './bio/bio.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'bio', component: BioComponent },
];

@NgModule({
    imports:      [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
    ],
    declarations: [
      AppComponent,
      BioComponent
    ],
    bootstrap:    [ AppComponent ]
  })
export class AppModule { }
