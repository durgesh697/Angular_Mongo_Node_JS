import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartCounterService } from '../cart-counter.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  
  products: any;
  // cartSet: any;
  // cart: any;
  cartTotal: any = 0;

  cartQuant:any;

  // productQuant(id):any {

  // }

  getCartData(): any{
    this.data.getCartData().subscribe(
      data => {
        this.products = data;
        var sum = 0;
        this.products.forEach(function(product){
          sum += product.price;
        });
        this.cartTotal = sum;
      })
  }

  remove(id):any{
    this.data.removeFromCart(id).subscribe(res => {
      this.cart.currentValue.subscribe(value => {
        this.cartQuant = value;
        this.getCartData();
      });
      this.cart.changeValue(this.cartQuant - 1);
    })
 }

  constructor(private data: DataService, private cart: CartCounterService) { }

  ngOnInit() {
      this.getCartData();
  }
}
