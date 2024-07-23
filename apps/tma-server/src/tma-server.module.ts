import { Module } from '@nestjs/common';
import { TmaServerController } from './tma-server.controller';
import { TmaServerService } from './tma-server.service';

@Module({
  imports: [],
  controllers: [TmaServerController],
  providers: [TmaServerService],
})
export class TmaServerModule {}
