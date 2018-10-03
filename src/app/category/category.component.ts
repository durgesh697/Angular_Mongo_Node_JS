import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products: any[];
  category: any;
  // i: any = 0;


  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.category = params['cat'];
        console.log(this.category);
        this.data.getProductByCategory(this.category).subscribe(
          data => {
            this.products = data;
          }
        );
      }
    );

  }

}
