import {Cart} from './cart';

/**
 * @author Marta Prosniak
 * Order class representation
 */

export class Order {
  id: number;
  cart: Cart;
  address: string;
  login: string;
  value: number;
}
