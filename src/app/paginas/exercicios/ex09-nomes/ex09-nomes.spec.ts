import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex09Nomes } from './ex09-nomes';

describe('Ex09Nomes', () => {
  let component: Ex09Nomes;
  let fixture: ComponentFixture<Ex09Nomes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex09Nomes],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex09Nomes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
