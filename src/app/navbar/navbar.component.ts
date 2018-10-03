import { Component, OnInit, Output } from '@angular/core';
// import { DataService } from '../data.service';
import { CartCounterService } from '../cart-counter.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 cartCounter: any;


  constructor(private cart: CartCounterService, private data: DataService) { }

  ngOnInit() {
    
    this.data.getCartData().subscribe(
      data =>{
        var a = Object.values(data).length;
        this.cart.changeValue(a);
      }
    );
    this.cart.currentValue.subscribe(value => this.cartCounter = value);

  }
}
