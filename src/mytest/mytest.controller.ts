
import { Controller, Param, Get, Post, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { User } from './interfaces/mytest.interface';
import { get } from 'https';
import { IMytestService } from './interfaces/mytest-service.interface';
import { MytestService } from './services/mytest.service';

@Controller('mytest')
export class MytestController {

    constructor(private readonly mytestService: MytestService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.mytestService.findAll();
    }

    /*
    @Get(':id')
    async findOne(@Param() params): Promise<User> {
        return await this.mytestService.findOne(params.id);
    }
    */
    @Get(':id')
    async findOne(@Res() res, @Param() params): Promise<User> {
        let id = parseInt(params.id);
        if (isNaN(id) || typeof (id) !== 'number' || id <= 0) {
            return res.status(HttpStatus.BAD_REQUEST).send({
                errorCode: 10001,
                errorMessage: '用户编号不正确'
            });
        }
        else {
            return res.status(HttpStatus.OK).send({
                errorCode: 0,
                errorMessage: '请求成功',
                data: await this.mytestService.findOne(id)
            })
        }
    }

    @Post()
    async create() {
        return await this.mytestService.create();
    }

    @Put()
    async edit() {
        return await this.mytestService.edit();
    }

    @Delete()
    async remove() {
        return await this.mytestService.remove();
    }

    /*
    @Get()
    async findAll(): Promise<User[]>{
        console.log("request findAll " );
        return [{
            id: 1,
            name: '小明',
            age: 18
        }];
    }

    @Get(':num')
    async findOne(@Param() params): Promise<User> {
        console.log("request findOne： " + params.num );        
        return {
            id: params.num,
            name: '小刚',
            age: 17
        };
    }

    @Post()
    async create() {
        // TODO：创建新用户
    }

    @Put()
    async edit() {
        // TODO： 修改用户信息
    }

    @Delete()
    async remove() {
        // TODO：删除已有用户
    }
*/
}
