import { User } from './mytest.interface';

export interface IMytestService {

   findAll(): Promise<User[]>;

   findOne(id: number): Promise<User>;

   create();

   edit();

   remove();

}