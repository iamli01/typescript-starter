import { Test, TestingModule } from '@nestjs/testing';
import { MytestService } from './mytest.service';

describe('MytestService', () => {
  let service: MytestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MytestService],
    }).compile();

    service = module.get<MytestService>(MytestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
