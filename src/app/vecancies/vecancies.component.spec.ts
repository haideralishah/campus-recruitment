/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VecanciesComponent } from './vecancies.component';

describe('VecanciesComponent', () => {
  let component: VecanciesComponent;
  let fixture: ComponentFixture<VecanciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VecanciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VecanciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
