import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareCarouselComponent } from './square-carousel.component';

describe('SquareCarouselComponent', () => {
  let component: SquareCarouselComponent;
  let fixture: ComponentFixture<SquareCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
