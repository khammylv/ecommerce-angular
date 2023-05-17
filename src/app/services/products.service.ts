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

  showProductUnico(id: number){
    return this.http.get(`${this.baseurl}/products/${id}`)
  }
  
}
