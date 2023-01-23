import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  numOfQty:number=1

  constructor() { }

  ngOnInit(): void {
  }
  increaseQty(){
    this.numOfQty++
  }
decreaseQty(){
  this.numOfQty--
}
}
