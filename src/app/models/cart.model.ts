export interface Cart {
    items: Array<CartItem>;
  }
  
  export interface CartItem {
    title: string;
    category: string;
    price: number;
    quantity: number;
    id: number;

  }