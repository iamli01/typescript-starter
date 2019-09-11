import { AppService } from './app.service';
import { Controller, Get, Post, HttpStatus, Param } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
/*  
  @Get(':id')
  getHello( @Param('id') id: string): string {
    console.log("request: " + id);
    return this.appService.getHello();
  }
*/

  @Get()
  getHello( ): string {
    console.log("request: " );
    return this.appService.getHello();
  }

}
