import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  products: any = [];
  lastSegment:any;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) {}

  ngOnInit() {
    const urlSegments = this.route.snapshot.url;
    this.lastSegment = urlSegments[urlSegments.length - 1].path;
    console.log(this.lastSegment);

    this.showAllProducts();
  }
  
  showAllProducts(){
    this.productsService.showProductsCategory(this.lastSegment).subscribe({
      next:(data:any)=>{
        this.products = data.products
        
      }
    })
  }  


}
