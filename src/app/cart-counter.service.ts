import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartCounterService {
   private valueSource = new BehaviorSubject(0);
   currentValue = this.valueSource.asObservable();
   constructor() {
    // this.a = this.http.get('/api/cart');
    // this.b= Object.values(this.a).length;
   }
  changeValue(value: any) {
    this.valueSource.next(value)
  }
}

