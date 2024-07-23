import { Injectable } from '@nestjs/common';

@Injectable()
export class TmaServerService {
  getHello(): string {
    return 'Hello World!';
  }
}
