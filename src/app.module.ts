import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MytestModule } from './mytest/mytest.module';

@Module({
  imports: [MytestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
