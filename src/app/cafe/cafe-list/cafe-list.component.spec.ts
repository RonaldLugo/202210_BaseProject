/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafeListComponent } from './cafe-list.component';
import { Cafe } from '../cafe'
import { Tipo } from '../tipo.enum'
import { HttpClientModule } from '@angular/common/http';


describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
