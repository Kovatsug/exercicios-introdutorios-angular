import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex06Contador } from './ex06-contador';

describe('Ex06Contador', () => {
  let component: Ex06Contador;
  let fixture: ComponentFixture<Ex06Contador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex06Contador],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex06Contador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
