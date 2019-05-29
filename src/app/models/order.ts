import {Product} from './product';
import {User} from './user';

/**
 * @author Marta Prosniak
 * Order class representation
 */

export class Order {
  orderid: number;
  items: Product[];
  address: string;
  buyer: User;
  value: number;
}
