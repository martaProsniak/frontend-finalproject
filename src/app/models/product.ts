import {User} from './user';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  url: string;
  seller: User;
}
