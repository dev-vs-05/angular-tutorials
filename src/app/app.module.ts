import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInterpolationComponent,
    EventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
