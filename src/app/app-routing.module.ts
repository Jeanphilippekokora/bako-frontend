import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BakoSpaceComponent } from './bako-space/bako-space.component';
import { FaqComponent } from './faq/faq.component';
import { OrderComponent } from './order/order.component';
import { NewsSpaceComponent } from './news-space/news-space.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'bako', component: BakoSpaceComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'order', component: OrderComponent },
  { path: 'news', component: NewsSpaceComponent },
  { path: 'tech', component: TechComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
