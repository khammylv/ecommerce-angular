import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Array<Product> | undefined;
  productsSubscription: Subscription | undefined;
  constructor(private productService: ProductsService,  private cartService: CartService,) {}


  ngOnInit(): void {
    this.getProducts();
    
  }
  getProducts(): void {
    this.productsSubscription = this.productService.showProducts().subscribe({
      next: (data: any) => {
        
        this.products = data.products;
       
      }
    });
  }
  getProductsCategory(category: string): void {
    this.productsSubscription = this.productService.filterCategories(category)
    .subscribe({
       next: (data: any) => {
        this.products = data.products;
       }
    })
  }
  
  getProductsSeach(search :string): void {
    this.productsSubscription = this.productService.searchProducts(search)
    .subscribe({
      next: (data: any) => {
        this.products = data.products 
      }
    })
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      title : product.title,
      category: product.category,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
    
  }
  onShowCategory(newCategory: string): void {
   
    if(newCategory === 'all') {
      this.getProducts()
    }else{
      this.getProductsCategory(newCategory)
    }
  }
 
  onSearchProducts(products: string): void{
    this.getProductsSeach(products)
   
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}