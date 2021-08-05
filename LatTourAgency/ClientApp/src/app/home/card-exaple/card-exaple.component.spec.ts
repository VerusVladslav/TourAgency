/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardExapleComponent } from './card-exaple.component';

describe('CardExapleComponent', () => {
  let component: CardExapleComponent;
  let fixture: ComponentFixture<CardExapleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExapleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
