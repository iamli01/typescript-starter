import { Controller, Param, Get, Post, Put, Delete, Body, UsePipes } from '@nestjs/common';
import { User } from './interfaces/mytest.interface';
import { MytestService } from './services/mytest.service';
import { MytestIdPipe } from './pipes/mytest-id.pipe';
import { CreateUserDto } from './dtos/create-user.dto';
import { ApiParamsValidationPipe } from 'src/common/pipes/api-params-validation.pipe';

@Controller('mytest')
export class MytestController {

    constructor(private readonly mytestService: MytestService) {  }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.mytestService.findAll();
    }

    //#region   findOne 方法的进化！

    /*
    // controller 里面实现
        @Get()
        async findAll(): Promise<User[]>{
            console.log("request findAll " );
            return [{
                id: 1,
                name: '小明',
                age: 18
            }];
        }

        // 使用 service里面实现方法，注册到 module里面 providers ，然后在此调用
        @Get(':id')
        async findOne(@Param() params): Promise<User> {
            return await this.mytestService.findOne(params.id);
        }
    */
    /*
        // 增加对参数的异常判断  |  自行判断，耦合度太高
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
    */

    /* 
    // Nest 内置了 HttpException 类用来处理异常   |   我们自定义的错误状态码没有了，怎么办？  |    下面使用 异常过滤器 来自定义响应格式。
    @Get(':id')
    async findOne(@Param() params): Promise<User> {
        let id = parseInt(params.id);

        if (isNaN(id) || typeof id !== 'number' || id <= 0) {
            //throw new HttpException('用户编号错误', HttpStatus.BAD_REQUEST);
            throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);     // 使用自定义异常类 
        }

        return await this.mytestService.findOne(id);
    }
    // controller 中，应该只负责请求的分发，所以下面的方法中，会把参数的验证放在管道中
*/

    //#endregion
    
    @Get(':id')
    //async findOne(@Param('id', new ParseIntPipe()) id): Promise<User> {   // 改为自定义的管道
    async findOne(@Param('id', new MytestIdPipe()) id): Promise<User> {
        return await this.mytestService.findOne(id);
    }
   
    @Post()
    async create(@Body() user: CreateUserDto): Promise<User> {
        return await this.mytestService.create(user);
    }

    @Put()
    async edit(@Body() user: CreateUserDto): Promise<User> {
        return await this.mytestService.edit(user);
    }

    @Delete(':id')
    async remove(@Param('id', new MytestIdPipe()) id) {
        return await this.mytestService.remove(id);
    }

//#region  最原始的做法
    /*
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
//#endregion

}
