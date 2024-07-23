import { Test, TestingModule } from '@nestjs/testing';
import { TmaServerController } from './tma-server.controller';
import { TmaServerService } from './tma-server.service';

describe('TmaServerController', () => {
  let tmaServerController: TmaServerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TmaServerController],
      providers: [TmaServerService],
    }).compile();

    tmaServerController = app.get<TmaServerController>(TmaServerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(tmaServerController.getHello()).toBe('Hello World!');
    });
  });
});
