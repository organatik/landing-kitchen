import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedComponentsModule} from "./modules/shared/shared-components.module";
import {LandingBlocksModule} from "./modules/landing-blocks/landing-blocks.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    LandingBlocksModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
