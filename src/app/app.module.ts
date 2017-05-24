import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyupComponent } from './keyup.component';
import { LoopBackComponent} from './loop-back.component';
import { LittleTourComponent } from './little-tour.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ClickMeComponent, KeyupComponent, LoopBackComponent, LittleTourComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
