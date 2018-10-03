import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private data: DataService) { }

  categories: string[];

  ngOnInit() {
    this.data.getCategories().subscribe(
      data => {
        this.categories = data;
      }
    );
    }
}

