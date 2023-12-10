import { HttpException, HttpStatus } from "@nestjs/common";

export class CredentialsWrong extends HttpException {
  constructor() {
    super('credenciales erroneas', HttpStatus.UNAUTHORIZED);
  }
}
