import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantasListFormComponent } from './santas-list-form.component';

describe('SantasListFormComponent', () => {
  let component: SantasListFormComponent;
  let fixture: ComponentFixture<SantasListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SantasListFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SantasListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
