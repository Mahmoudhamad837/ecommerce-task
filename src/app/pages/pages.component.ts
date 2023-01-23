import { Component, OnInit } from '@angular/core';
import { PagesService } from './pages.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  collapseNavMobile:number=250
  showSideNav: boolean = false;

  cartCount: number;
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
  toggeleNavMobile(){
    this.collapseNavMobile=this.collapseNavMobile*-1
    this.showSideNav = !this.showSideNav;
  }

}
