import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInterpolationComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    AttributeBindingComponent,
    TemplateReferenceVariableComponent,
    NgIfDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
