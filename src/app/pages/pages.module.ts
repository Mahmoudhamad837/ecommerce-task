import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';


@NgModule({
  declarations: [
    HomeComponent,
    SingleProductComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
