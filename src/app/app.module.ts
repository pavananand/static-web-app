import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TransparencyComponent } from './components/transparency/transparency.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BloodComponent } from './components/blood/blood.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TransparencyComponent,
    JobsComponent,
    NavbarComponent,
    BloodComponent,
    FooterComponent,
    TestimonialsComponent,
    ChatWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
