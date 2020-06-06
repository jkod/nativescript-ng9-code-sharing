import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { componentDeclarations } from './app.common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ...componentDeclarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
