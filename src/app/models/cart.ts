import {Product} from './product';
import {User} from './user';

export class Cart {
  id: number;
  products: Product[];
  buyer: User;
}
