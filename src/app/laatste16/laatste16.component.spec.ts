import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Laatste16Component } from './laatste16.component';

describe('Laatste16Component', () => {
  let component: Laatste16Component;
  let fixture: ComponentFixture<Laatste16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Laatste16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Laatste16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
