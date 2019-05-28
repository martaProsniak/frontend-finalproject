import {User} from './user';
import {Cart} from './cart';

/**
 * @author Marta Prosniak
 * Product class representation
 */

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  url: string;
  seller: User;
  cart: Cart;
}
