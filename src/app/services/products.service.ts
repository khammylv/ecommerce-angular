import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import {Modal} from '../models/modal.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,) {}
   baseurl = 'https://dummyjson.com'
   showProducts():Observable<Array <Product>>{
    return this.http.get<Array<Product>>(`${this.baseurl}/products`)
  }

  showProductUnico(id: any):Observable<Array <Modal>>{
    return this.http.get<Array<Modal>>(`${this.baseurl}/products/${id}`)
  }
  

  getAllCategorias(){
    return this.http.get(`${this.baseurl}/products/categories`)
  }

  filterCategories(categories: string){
    return this.http.get<Array<Product>>(`${this.baseurl}/products/category/${categories}`)
  }

  searchProducts(products : string){
    return this.http.get<Array<Product>>(`${this.baseurl}/products/search?q=${products}`)
  }
}
