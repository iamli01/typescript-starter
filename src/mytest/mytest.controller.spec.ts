import { Test, TestingModule } from '@nestjs/testing';
import { MytestController } from './mytest.controller';

describe('Mytest Controller', () => {
  let controller: MytestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MytestController],
    }).compile();

    controller = module.get<MytestController>(MytestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
