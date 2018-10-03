import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { $ } from 'protractor';
import { CartCounterService } from '../cart-counter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any[];
  product: any;
  arr: any[];
  productId: any;
  l: any;
  errMsg: any = " ";
  i: any = 0;
  cartCounter: any;
  isDisabled: boolean = false;
 
  add_to_cart(product): any{
    if(this.check_in_cart(this.product)){
      
    }
    else{
      this.data.addToCart(this.product).subscribe(res => {
      });
      this.errMsg = 'Product added to cart'; 
      this.isDisabled = true;
      this.cart.currentValue.subscribe(value => this.cartCounter = value)
      this.cart.changeValue(this.cartCounter += 1);
    }
  }

  check_in_cart(product): any{
    this.data.getCartData().subscribe(
      data => {
        data.forEach((pro) => {
          if(pro._id == product._id){
            this.errMsg = 'This product is already in your cart.';
            this.isDisabled = true;
          }
          else{
            // this.errMsg = '';
          }
        })
      }
    );
  }

  changeI(i): any{
    this.i = i;
  }

  constructor(private data: DataService, private route: ActivatedRoute, private cart: CartCounterService) {}

  ngOnInit() {
    this.data.getData().subscribe(
      data => {
        this.isDisabled = false;
        this.products = data;
        this.route.params.subscribe(
          params => {
            this.productId = params['id'];
            console.log(this.productId);
            this.data.getProduct(this.productId).subscribe(data => {
              this.product = data;
              if (this.check_in_cart(this.product)) {
                this.errMsg = "This product is already in your cart.";
                this.isDisabled = true;
              }
            });

          }
        );
      }
    )
  }
}