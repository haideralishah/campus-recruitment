/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StPageComponent } from './st-page.component';

describe('StPageComponent', () => {
  let component: StPageComponent;
  let fixture: ComponentFixture<StPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
