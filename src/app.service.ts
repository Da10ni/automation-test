import { Injectable } from '@nestjs/common';
import os from 'os'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!!! checking lint if its workin or not';
  }
}
// test
