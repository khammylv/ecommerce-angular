import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) { }
  isLogged = false; 


  addToCart(item: CartItem):void{
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if(!itemInCart){
      items.push(item);
      this.cart.next({ items });
      this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
    }else{
      this._snackBar.open('Este producto ya existe', 'Alert', { duration: 3000 });
    }
  }

  valorMas(item : CartItem):void{
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
   
    if (itemInCart) {
      itemInCart.quantity += 1;
    }

    this.cart.next({ items });
    this._snackBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
  }


  valorMenos(item : CartItem):void{
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      if(itemInCart.quantity === 1){
        this._snackBar.open('No se puede ', 'Error', { duration: 3000 });
       
      }else{
        itemInCart.quantity -= 1;
        this.cart.next({ items });
        this._snackBar.open('1 item removed from cart.', 'Ok', { duration: 3000 });
      }
    
    }
  }

  removeItem(item: CartItem){
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    
    this.cart.next({ items: filteredItems });
    this._snackBar.open('1 item removed from cart.', 'Ok', {
      duration: 3000,
    });

    return filteredItems;
  }

  getLogged(){
    return sessionStorage.getItem('logged') != null
      ? sessionStorage.getItem('logged')?.toString()
      : '';
  }

  isLoggedIn(){
    if(this.getLogged() === 'true'){
      this.isLogged = true;
    }
    return this.isLogged;
  }
}