import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  getAllProducts(){
    return fetch('../../assets/db/data.json').then(res=> res.json());
  }
}
