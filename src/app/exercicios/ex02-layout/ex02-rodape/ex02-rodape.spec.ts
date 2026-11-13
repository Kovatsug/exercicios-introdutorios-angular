import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex02Rodape } from './ex02-rodape';

describe('Ex02Rodape', () => {
  let component: Ex02Rodape;
  let fixture: ComponentFixture<Ex02Rodape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex02Rodape],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex02Rodape);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
