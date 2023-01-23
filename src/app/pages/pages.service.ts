import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  cartCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  getAllProducts(){
    return fetch('../../assets/db/data.json').then(res=> res.json());
  }
}
