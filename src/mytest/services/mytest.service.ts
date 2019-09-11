import { Injectable } from '@nestjs/common';
import { IMytestService } from '../interfaces/mytest-service.interface';
import { User } from '../interfaces/mytest.interface';

@Injectable()
export class MytestService implements IMytestService {
    async findAll(): Promise<User[]> {
        console.log("findAll");
        return [];
    }

    async findOne(id: number): Promise<User> {
        console.log("findOne : "+ id);
        return {
            id,
            name: '小明',
            age: 18
        };
    }

    async create(): Promise<string> {
        console.log("create : ");
        return 'this is create method!';
    }

    async edit() {

    }

    async remove() {

    }
}
