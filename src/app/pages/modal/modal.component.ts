import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Subscription } from 'rxjs';
import {Modal} from 'src/app/models/modal.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
   productModal: Modal | undefined;
   constructor(private _route: ActivatedRoute,private productService: ProductsService, ){
    
   }

   ngOnInit(): void {
  
    let id = this._route.snapshot.paramMap.get('id')
  
    this.showModal(id);
   }

   showModal(id:any):void {
     
      this.productService.showProductUnico(id).subscribe({
        next: (data: any) => {
          console.log(data)
          this.productModal = data;
         
        }
      })
   }
}
