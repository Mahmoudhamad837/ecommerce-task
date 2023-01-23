import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {path: '', component: PagesComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'product/:id', component: SingleProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
