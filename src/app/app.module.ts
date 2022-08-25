import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { EarthComponent } from './space-objects/earth/earth.component';
import { SunComponent } from './space-objects/sun/sun.component';
import { MoonComponent } from './space-objects/moon/moon.component';
import { CosmosComponent } from './space-objects/cosmos/cosmos.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainWrapperComponent,
    EarthComponent,
    SunComponent,
    MoonComponent,
    CosmosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
