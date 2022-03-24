/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideojuegoComponent } from './videojuego.component';

describe('VideojuegoComponent', () => {
  let component: VideojuegoComponent;
  let fixture: ComponentFixture<VideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
