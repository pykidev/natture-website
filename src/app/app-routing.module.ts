import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MerchPageComponent } from './merch-page/merch-page.component';

const routes: Routes = [
  {path: 'events', component: EventsPageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  {path: 'merch', component: MerchPageComponent},
  {path: '', component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
