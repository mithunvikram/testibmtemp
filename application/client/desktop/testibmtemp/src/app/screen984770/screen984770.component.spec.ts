import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Screen984770Component } from './screen984770.component';

describe('Screen984770Component', () => {
  let component: Screen984770Component;
  let fixture: ComponentFixture<Screen984770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Screen984770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Screen984770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});