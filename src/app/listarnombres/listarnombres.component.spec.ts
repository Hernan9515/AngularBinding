import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarnombresComponent } from './listarnombres.component';

describe('ListarnombresComponent', () => {
  let component: ListarnombresComponent;
  let fixture: ComponentFixture<ListarnombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarnombresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarnombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
