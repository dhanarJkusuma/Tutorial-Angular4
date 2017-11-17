import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Halaman1Component } from './halaman1.component';

describe('Halaman1Component', () => {
  let component: Halaman1Component;
  let fixture: ComponentFixture<Halaman1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Halaman1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Halaman1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
