import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WppIconComponent } from './wpp-icon.component';

describe('WppIconComponent', () => {
  let component: WppIconComponent;
  let fixture: ComponentFixture<WppIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WppIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
