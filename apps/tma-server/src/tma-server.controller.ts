import { Controller, Get } from '@nestjs/common';
import { TmaServerService } from './tma-server.service';

@Controller()
export class TmaServerController {
  constructor(private readonly tmaServerService: TmaServerService) {}

  @Get()
  getHello(): string {
    return this.tmaServerService.getHello();
  }
}
