import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComic } from './detalle-comic';

describe('DetalleComic', () => {
  let component: DetalleComic;
  let fixture: ComponentFixture<DetalleComic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleComic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleComic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
