import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListGeneratorComponent } from './book-selector.component';

describe('ReadingListGeneratorComponent', () => {
  let component: ReadingListGeneratorComponent;
  let fixture: ComponentFixture<ReadingListGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingListGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadingListGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
