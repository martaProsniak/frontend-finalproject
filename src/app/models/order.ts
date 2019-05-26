import {Cart} from './cart';

export class Order {
  id: number;
  cart: Cart;
  address: string;
  login: string;
  value: number;
}
