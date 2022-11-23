import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MerchCardComponent } from './merch-card/merch-card.component';
import { FooterComponent } from './footer/footer.component';
import { MerchPageComponent } from './merch-page/merch-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { EventsPageComponent } from './events-page/events-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileCardComponent,
    MerchCardComponent,
    FooterComponent,
    MerchPageComponent,
    LandingPageComponent,
    AboutUsPageComponent,
    EventsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
