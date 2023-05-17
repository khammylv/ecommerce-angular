import { Component, OnInit} from '@angular/core';
import{ProductsService} from '../services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: any = [];
  productTable : any = [];
  idincludes: any = [];
   constructor(private productsService: ProductsService){}
   show = false;
   ngOnInit(): void{
     this.showAllProducts()
   }

  showAllProducts(){
    this.productsService.showProducts().subscribe({
      next:(data:any)=>{
        this.products = data.products
        
      }
    })

    
  }
  showProductsOne(id: number){
      
      this.productsService.showProductUnico(id).subscribe({
        next:(data:any)=>{
          if(this.idincludes.length === 0){
            this.idincludes.push(id);
            this.productTable.push(data)
           
          }else{
            if(this.idincludes.includes(id)){
              alert('Este producto ya esta agregado')
            }else{
              this.idincludes.push(id);
              this.productTable.push(data)
            }
             
          }
          
        }
      })
  }
  
  deleteTable(id: number){
   
    this.productTable = this.filterItem(id)
    
    
    this.idincludes = this.filterNumber(id)
    
  }

  filterItem(id: number){
    let filter = this.productTable.filter((product: any) => product.id != id);
    return filter
  }
  filterNumber(id: number){
    let filternumber = this.idincludes.filter((id2: any) => id2 != id); 
    return filternumber  
  }
}
