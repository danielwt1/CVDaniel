import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { InfopersonalComponent } from './infopersonal/infopersonal.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { IdiomsComponent } from './idioms/idioms.component';
import { InteresesComponent } from './intereses/intereses.component';
import { ExplaboralComponent } from './explaboral/explaboral.component';

import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { FormacionComponent } from './formacion/formacion.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    InfopersonalComponent,
    AboutMeComponent,
    IdiomsComponent,
    InteresesComponent,
    ExplaboralComponent,

    ConocimientosComponent,
     FormacionComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
