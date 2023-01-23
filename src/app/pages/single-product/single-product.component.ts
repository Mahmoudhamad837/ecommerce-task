import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  numOfQty:number=1
  cartCount: number = 0;

  constructor(
    private pagesService: PagesService
  ) { }

  ngOnInit(): void {
    this.pagesService.cartCount.subscribe(
      res=>{
        this.cartCount = res;
      }
    )
  }
  increaseQty(){
    this.numOfQty++
  }
  decreaseQty(){
    this.numOfQty--
  }

  addToCart(){
    this.pagesService.cartCount.next(this.cartCount + 1);
  }
}
