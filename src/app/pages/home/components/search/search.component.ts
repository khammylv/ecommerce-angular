import { Component, Output,  EventEmitter} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 @Output() searchProducts = new EventEmitter<string>();

constructor(private _snackBar: MatSnackBar){}
 onSearchProducts(products: string): void{
  if(products === ''){
    this._snackBar.open('Mensaje Vacio', 'Ok', { duration: 3000 });
  }else{
    this.searchProducts.next(products)
    
  }
   
 } 

}
