import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  categoryFilters: any[] = [];
  priceFilters: any[] = [];
  final_filters: any[] = [];
  prices: any[] =[];
  constructor(
    private pagesService: PagesService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.pagesService.getAllProducts().then(res=>{
      this.products = res['products'];
      this.categories = res['category_filters'];
      this.prices = res['price_filter']
    });
  }

  filterProducts(filters: any[]){
    this.products  = this.products.filter((product)=>{
      return filters.filter((filter)=>{
          return filter.value !== product.category;
      }).length == 0
    });
  }

  checkFilter(event: any, type: string){
    let index = this.final_filters.findIndex(cat=> cat.value == event.target.value);
    switch(type){
      case 'category':
        if(index > -1){
          this.final_filters.splice(index, 1);
        }else{
          this.final_filters.push({type: 'category', value: event.target.value});
        }
      break;

      case 'price':
        if(index > -1){
          this.final_filters.splice(index, 1);
        }else{
          this.final_filters.push({type: 'price', value: event.target.value});
        }
      break;
    }

    this.filterProducts(this.final_filters);
  }

}
