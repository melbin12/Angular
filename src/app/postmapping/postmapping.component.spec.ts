import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmappingComponent } from './postmapping.component';

describe('PostmappingComponent', () => {
  let component: PostmappingComponent;
  let fixture: ComponentFixture<PostmappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostmappingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
