import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { IUser } from './interfaces/user';
import { Response } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Res() res: Response, @Body() user: IUser) {
    const [loginPage, browserInstance] = await this.appService.login(user);
    const userInfo = await this.appService.SiiScraper(loginPage);

    browserInstance?.close();
    return res.json(userInfo);
  }
}
