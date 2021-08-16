import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectoresComponent } from './colectores.component';

describe('ColectoresComponent', () => {
  let component: ColectoresComponent;
  let fixture: ComponentFixture<ColectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
