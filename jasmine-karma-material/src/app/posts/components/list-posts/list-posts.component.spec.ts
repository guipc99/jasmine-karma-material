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
import { PostModel } from '../../models/post.model';
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
  //TESTE NO DELETE 
  it('delete test', ()=>{
      //criando cenário
      let post = new PostModel();
      post.body = 'nome';
      post.title = 'title';
      post.userId = 1;
      post.id = 1;
      //adiciona o fim do obj no fim do array 
      component.dataSource.push(post);
      //tamanho do array antes de ser deletado 
      let lengthOld = component.dataSource.length;

      //execução
      component.onDelete(post)

      //validação
      expect(component.dataSource.length).toBe(lengthOld - 1)

  })


});
