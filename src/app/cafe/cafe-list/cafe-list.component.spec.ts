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

    component.cafes = [
      new Cafe (
        1,
        'Cafe antioqueño',
        Tipo.BLEND,
        'Medellin, Antioquia',
        'Natural',
        1850,
        'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-sombrero-vueltiao-2-cafe-colombiano-f_720x.png'
      ),
      new Cafe (
        1,
        'Cafe cafetero',
        Tipo.CAFEDEORIGEN,
        'Quindio, Eje Cafetero',
        'Panela, Durazno',
        1920,
        'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png'
      ),
      new Cafe (
        1,
        'Cafe caleño',
        Tipo.BLEND,
        'cali, Valle del Cauca',
        'Chocolate, Caramelo',
        2000,
        'https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especal-sombrero-vueltiao-2-cafe-colombiano-f_720x.png'
      ),
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an th element ', () => {
    const th = debug.query(By.css('th:nth-of-type(2)'));
    const content: HTMLElement = th.nativeElement;
    expect(content.textContent).toEqual('Nombre')
  });

  it('should have three rows elements ', () => {
    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toEqual(3)
  });

});
