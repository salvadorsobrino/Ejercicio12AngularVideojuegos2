/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginErroneoComponent } from './loginErroneo.component';

describe('LoginErroneoComponent', () => {
  let component: LoginErroneoComponent;
  let fixture: ComponentFixture<LoginErroneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginErroneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginErroneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
