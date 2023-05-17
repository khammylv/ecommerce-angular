import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,) {}
   baseurl = 'https://dummyjson.com'
   showProducts(){
    return this.http.get(`${this.baseurl}/products`)
  }

  showCategories(){
    return this.http.get(`${this.baseurl}/products/categories`)
  }

  showProductsCategory(category:any){
    return this.http.get(`${this.baseurl}/products/category/${category}`)
  }

  showProductsSearch(word:any){
    return this.http.get(`${this.baseurl}/products//search?q=${word}`)
  }

}
