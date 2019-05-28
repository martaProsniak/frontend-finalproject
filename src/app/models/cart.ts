import {Product} from './product';
import {User} from './user';

/**
 * @author Marta Prosniak
 * Cart class representation
 */

export class Cart {
  id: number;
  products: Product[];
  buyer: User;
  cartValue: number;
}
