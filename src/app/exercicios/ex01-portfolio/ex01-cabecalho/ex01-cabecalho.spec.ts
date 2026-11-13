import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex01Cabecalho } from './ex01-cabecalho';

describe('Ex01Cabecalho', () => {
  let component: Ex01Cabecalho;
  let fixture: ComponentFixture<Ex01Cabecalho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex01Cabecalho],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex01Cabecalho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
