import { Component , Input, OnInit,} from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  show = false;
  isLogged = this.cartService.isLoggedIn();

  private _cart: Cart = { items: [] };
  itemsQuantity = 0;
  itemCant = 0;
  
  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;
    this.itemCant = cart.items.length;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);


     
  }
  
  constructor(public router: Router,private cartService: CartService) {}
  
  ngOnInit() {
    this.isLogged = this.cartService.isLoggedIn();
    console.log(this.isLogged);
  }
  
  loggin(){
    this.isLogged = this.cartService.isLoggedIn();
    this.router.navigateByUrl('/login');
  }

  logout() {
    sessionStorage.clear();
    this.isLogged = false;
    this.router.navigateByUrl('/home');

  }
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


// routerLink="/login"