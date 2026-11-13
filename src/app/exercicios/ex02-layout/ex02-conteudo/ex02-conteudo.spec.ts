import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex02Conteudo } from './ex02-conteudo';

describe('Ex02Conteudo', () => {
  let component: Ex02Conteudo;
  let fixture: ComponentFixture<Ex02Conteudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex02Conteudo],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex02Conteudo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
