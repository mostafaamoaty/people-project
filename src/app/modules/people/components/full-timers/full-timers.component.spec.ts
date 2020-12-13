import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullTimersComponent } from './full-timers.component';

describe('FullTimersComponent', () => {
  let component: FullTimersComponent;
  let fixture: ComponentFixture<FullTimersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullTimersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
