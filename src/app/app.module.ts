import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BakoSpaceComponent } from './bako-space/bako-space.component';
import { FooterComponent } from './footer/footer.component';
import { NewsSpaceComponent } from './news-space/news-space.component';
import { FaqComponent } from './faq/faq.component';
import { OrderComponent } from './order/order.component';
import { TechComponent } from './tech/tech.component';
import { NavbarListModule } from './navbar-list/navbar-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BakoSpaceComponent,
    FooterComponent,
    NewsSpaceComponent,
    FaqComponent,
    OrderComponent,
    TechComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    NavbarListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
