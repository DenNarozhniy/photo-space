import { async, TestBed } from '@angular/core/testing';
import { DynamicMatTableModule } from './dynamic-mat-table.module';

describe('DynamicMatTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DynamicMatTableModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DynamicMatTableModule).toBeDefined();
  });
});
