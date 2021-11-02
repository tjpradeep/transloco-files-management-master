import { async, TestBed } from '@angular/core/testing';
import { DemoLibModule } from './demo-lib.module';

describe('DemoLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DemoLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DemoLibModule).toBeDefined();
  });
});
