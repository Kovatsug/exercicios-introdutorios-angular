import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex01Rodape } from './ex01-rodape';

describe('Ex01Rodape', () => {
  let component: Ex01Rodape;
  let fixture: ComponentFixture<Ex01Rodape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex01Rodape],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex01Rodape);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
