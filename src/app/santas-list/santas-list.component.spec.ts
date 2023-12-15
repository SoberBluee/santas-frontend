import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SantasListComponent } from './santas-list.component';

describe('SantasListComponent', () => {
  let component: SantasListComponent;
  let fixture: ComponentFixture<SantasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SantasListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SantasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
