import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex05Mercado } from './ex05-mercado';

describe('Ex05Mercado', () => {
  let component: Ex05Mercado;
  let fixture: ComponentFixture<Ex05Mercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex05Mercado],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex05Mercado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
