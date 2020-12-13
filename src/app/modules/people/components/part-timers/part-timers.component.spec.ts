import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTimersComponent } from './part-timers.component';

describe('PartTimersComponent', () => {
  let component: PartTimersComponent;
  let fixture: ComponentFixture<PartTimersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartTimersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
