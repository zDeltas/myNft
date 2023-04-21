import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNftDialogComponent } from './edit-nft-dialog.component';

describe('EditNftDialogComponent', () => {
  let component: EditNftDialogComponent;
  let fixture: ComponentFixture<EditNftDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNftDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNftDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
