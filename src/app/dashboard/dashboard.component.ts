import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { groupBy } from 'rxjs/internal/operators/groupBy';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: any;
  categories: string[];
  product_of_category: Object[];
  i: any = 0;

  constructor(private data: DataService) { }
    
  ngOnInit() {
    this.data.getData().subscribe(
      data => {
        this.products = data;
      } 
    );  
    this.data.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    );
  }
}