import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Halaman3Component } from './halaman3.component';

describe('Halaman3Component', () => {
  let component: Halaman3Component;
  let fixture: ComponentFixture<Halaman3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Halaman3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Halaman3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
