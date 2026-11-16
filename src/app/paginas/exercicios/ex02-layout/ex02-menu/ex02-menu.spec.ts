import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex02Menu } from './ex02-menu';

describe('Ex02Menu', () => {
  let component: Ex02Menu;
  let fixture: ComponentFixture<Ex02Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex02Menu],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex02Menu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
