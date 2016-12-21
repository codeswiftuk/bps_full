import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermDatesComponent } from './term-dates/term-dates.component';
import { TestimonalsComponent } from './testimonals/testimonals.component';
import { MeetUsComponent } from './meet-us/meet-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TopBarComponent,
    FooterComponent,
    AboutUsComponent,
    TermDatesComponent,
    TestimonalsComponent,
    MeetUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '', component: HomeComponent},
      { path : 'home', component: HomeComponent },
      { path : 'about-us', component: AboutUsComponent },
      { path : 'term-dates', component: TermDatesComponent },
      { path : 'testimonals', component: TestimonalsComponent },
      { path : 'meet-us', component: MeetUsComponent },
      { path : 'contact-us', component: ContactUsComponent }

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
