import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Pipe, PipeTransform} from '@angular/core';
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get("http://localhost:3001/api");
  }

  getProduct(id): any {
    return this.http.get('http://localhost:3001/api/product/' + id);
  }

  getCartData(): any {
    return this.http.get("http://localhost:3001/api/cart");
  }

  addToCart(product: any): any{
    console.log(product);
    // const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3001/api/cart', {
      _id: product._id,
      category: product.category,
      image_url: product.image_url,
      name: product.name,
      price: product.price
    })
  }

  removeFromCart(id: any): any{
      return this.http.delete('http://localhost:3001/api/cart/' + id);
  }

  getCategories(): any{
    return this.http.get('http://localhost:3001/api/categories');
  }

  getProductByCategory(cat: any): any{
    return this.http.get('http://localhost:3001/api/categories/' + cat);
  }

  getCartCount(): any{
    return this.http.get('http://localhost:3001/api/cart/count');
  }
}
