/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreateOwnTourComponent } from './create-own-tour.component';

describe('CreateOwnTourComponent', () => {
  let component: CreateOwnTourComponent;
  let fixture: ComponentFixture<CreateOwnTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOwnTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOwnTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
