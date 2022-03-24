/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideojuegosComponent } from './videojuegos.component';

describe('VideojuegosComponent', () => {
  let component: VideojuegosComponent;
  let fixture: ComponentFixture<VideojuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
