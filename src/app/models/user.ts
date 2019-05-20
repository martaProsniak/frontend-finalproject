import {Product} from './product';

export class User {
  id: number;
  name: string;
  surname: string;
  login: string;
  password: string;
  accepted: boolean;
  role: any;
  products: Product[];
}
