import { Module } from '@nestjs/common';
import { MytestController } from './mytest.controller';
import { MytestService } from './services/mytest.service';

@Module({
    controllers: [MytestController],
    providers: [MytestService],
})
export class MytestModule {}
