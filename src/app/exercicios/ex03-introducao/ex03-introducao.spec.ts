import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex03Introducao } from './ex03-introducao';

describe('Ex03Introducao', () => {
  let component: Ex03Introducao;
  let fixture: ComponentFixture<Ex03Introducao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex03Introducao],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex03Introducao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
