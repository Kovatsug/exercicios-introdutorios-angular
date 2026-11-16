import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex07Autenticacao } from './ex07-autenticacao';

describe('Ex07Autenticacao', () => {
  let component: Ex07Autenticacao;
  let fixture: ComponentFixture<Ex07Autenticacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex07Autenticacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex07Autenticacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
