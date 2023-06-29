
import { Component, EventEmitter,  OnDestroy, OnInit,Output} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit , OnDestroy{
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] | undefined;
  categoriesSubscription: Subscription | undefined;
  

  constructor(private productService: ProductsService,){}

  ngOnInit(): void {
    this.categoriesSubscription = this.productService.getAllCategorias()
    .subscribe((response:  any)=>{
      this.categories = response
      
    })

   
  }

  onShowCategory(category : string) : void {
    this.showCategory.next(category);
    
  }

 

  ngOnDestroy(): void {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }
}