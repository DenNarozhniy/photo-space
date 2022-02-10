import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitExampleComponent } from './portrait-example.component';

describe('PortraitExampleComponent', () => {
  let component: PortraitExampleComponent;
  let fixture: ComponentFixture<PortraitExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
