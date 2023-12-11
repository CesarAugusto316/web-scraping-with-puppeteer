import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user';
import puppeteer, { Browser, Page } from 'puppeteer';
import { loginApiUrl, loggedInApiUrl } from './helpers/constants';
import { CredentialsWrong } from './helpers/credentialsWrong';


@Injectable()
export class AppService {
  async login(user: IUser): Promise<[Page, Browser]> {
    const browser = await puppeteer.launch({ headless: 'new' }); // change to false for full browser mode
    const loginPage = await browser.newPage();
    await loginPage.goto(loginApiUrl);
    await loginPage.setViewport({ width: 1080, height: 1024 });
    await loginPage.type('#rutcntr', user.user);
    await loginPage.type('#clave', user.password);

    const enterSelector = '#bt_ingresar';
    await loginPage.waitForSelector(enterSelector);

    const [loggedMainPage] = await Promise.all([
      loginPage.waitForNavigation(),
      loginPage.click(enterSelector),
    ]);
    if (loggedMainPage.url() !== loggedInApiUrl) {
      throw new CredentialsWrong();
    }
    // el.dispose();
    // await loginPage.reload();
    return [loginPage, browser];
  }


  async SiiScraper(mainPage: Page) {
    const el = await mainPage.waitForSelector('div#misii');

    // scraping dom elements
    const userInfo = await mainPage.evaluate((element) => {
      const name = element.querySelector('#nameCntr').textContent?.trim();
      const email = element.querySelector('#mailCntrNoti').textContent?.trim();
      const address = element.querySelector('#domiCntr').textContent?.trim();
      const rut = element.querySelector('#rutCntr').textContent?.trim();

      return { name, email, address, rut };
    },
      el
    );

    return userInfo;
  }
}
