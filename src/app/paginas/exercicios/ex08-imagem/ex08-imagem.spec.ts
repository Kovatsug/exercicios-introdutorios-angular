import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex08Imagem } from './ex08-imagem';

describe('Ex08Imagem', () => {
  let component: Ex08Imagem;
  let fixture: ComponentFixture<Ex08Imagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex08Imagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex08Imagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
