import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormPostsComponent } from '../form-posts/form-posts.component';

import { ListPostsComponent } from './list-posts.component';

describe('ListPostsComponent', () => {
  let component: ListPostsComponent;
  let fixture: ComponentFixture<ListPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPostsComponent, FormPostsComponent],
      imports: [
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSliderModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
