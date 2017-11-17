import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Halaman2Component } from './halaman2.component';

describe('Halaman2Component', () => {
  let component: Halaman2Component;
  let fixture: ComponentFixture<Halaman2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Halaman2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Halaman2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
