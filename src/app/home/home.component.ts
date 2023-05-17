import { Component, OnInit } from '@angular/core';
import{ProductsService} from '../services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any = [];

  constructor(private productsService: ProductsService){}

  ngOnInit(): void{
    this.showAllCategories()
  }

  dropdownVisible = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  showAllCategories(){
    this.productsService.showCategories().subscribe({
      next:(data:any)=>{
        this.categories = data
        
      }
    })
  } 
  




  
}
