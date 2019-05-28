import {Product} from './product';
import {Cart} from './cart';

/**
 * @author Marta Prosniak
 * User class representation
 */
export class User {
  id: number;
  name: string;
  surname: string;
  login: string;
  password: string;
  accepted: boolean;
  role: any;
  products: Product[];
  cart: Cart;
}
