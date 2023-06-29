import { Component , Input} from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  show = false;

  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
  
  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(private cartService: CartService) {}
  agregarMas(items: any){
    this.cartService.valorMas(items)
  
  }

  agregarMenos(items: any){
    this.cartService.valorMenos(items)
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeItem(item)
  }
}
