import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex01Portfolio } from './ex01-portfolio';

describe('Ex01Portfolio', () => {
  let component: Ex01Portfolio;
  let fixture: ComponentFixture<Ex01Portfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex01Portfolio],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex01Portfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
