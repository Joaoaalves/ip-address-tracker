import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpWrapperComponent } from './ip-wrapper.component';

describe('IpWrapperComponent', () => {
  let component: IpWrapperComponent;
  let fixture: ComponentFixture<IpWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IpWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
