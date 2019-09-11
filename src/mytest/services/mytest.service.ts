import { Injectable } from '@nestjs/common';
import { IMytestService } from '../interfaces/mytest-service.interface';
import { User } from '../interfaces/mytest.interface';

@Injectable()
export class MytestService implements IMytestService {

    private static users: User[] = [
        { id: 1, name: '小明', age: 18 },
        { id: 2, name: '小红', age: 16 },
        { id: 3, name: '小壮', age: 20 },
        { id: 4, name: 'A', age: 20 },
        { id: 5, name: 'B', age: 20 },
        { id: 7, name: 'C', age: 20 },
    ];

    async findAll(): Promise<User[]> {
        console.log("findAll");
        return MytestService.users;
    }

    async findOne(id: number): Promise<User> {
        console.log("findOne : "+ id);
        return MytestService.users.find(user => user.id == id)
    }

    async create(user : User): Promise<User> {
        MytestService.users.push(user);
        return user;
    }

    async edit(user:User): Promise<User> {
        let index = MytestService.users.findIndex(item => item.id == user.id);

        if(index >= 0){
            MytestService.users[index] = user;
        }
        return MytestService.users[index];
    }

    async remove(id: number) : Promise<boolean> {
        let index = MytestService.users.findIndex(item => item.id == id);
        if(index  >=  0) {
            MytestService.users.splice(index, 1);
        }
        return index >= 0;
    }
}
