import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsFooterComponent } from './ms-footer.component';

describe('MsFooterComponent', () => {
  let component: MsFooterComponent;
  let fixture: ComponentFixture<MsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
