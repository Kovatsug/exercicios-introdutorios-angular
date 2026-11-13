import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex02Cabecalho } from './ex02-cabecalho';

describe('Ex02Cabecalho', () => {
  let component: Ex02Cabecalho;
  let fixture: ComponentFixture<Ex02Cabecalho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex02Cabecalho],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex02Cabecalho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
