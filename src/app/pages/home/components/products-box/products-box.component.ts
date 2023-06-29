import { Component, Input,  Output,  EventEmitter} from '@angular/core';
import {Product} from 'src/app/models/product.model'


@Component({
  selector: '[app-products-box]',
  templateUrl: './products-box.component.html',
  styleUrls: ['./products-box.component.css']
})
export class ProductsBoxComponent {
  @Input() product : Product  | undefined;
  @Output() addToCart = new EventEmitter();
  constructor(){}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}


// [routerLink]="['/products', product.id]"


