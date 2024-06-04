import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementQueryComponent } from './user-management-query.component';

describe('UserManagementQueryComponent', () => {
  let component: UserManagementQueryComponent;
  let fixture: ComponentFixture<UserManagementQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserManagementQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserManagementQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
