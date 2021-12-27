import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModel } from '../../models/post.model';

import { FormPostsComponent } from './form-posts.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

describe('FormPostsComponent', () => {
  let component: FormPostsComponent;
  let fixture: ComponentFixture<FormPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostsComponent ],
      imports : [
        FormsModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when is empty' , ()=> {
    expect(component.form.valid).toBeFalsy();
  });

  it('when title is empty', ()=> {
    let fieldControl = component.form.controls['title'];

    expect(fieldControl.valid).toBeFalsy();

    let e = fieldControl.errors || {} ;
    expect(e['required']).toBeTruthy();

  });

  it('when title is valid', ()=> {
    let fieldControl = component.form.controls['title'];

    fieldControl.setValue("test");

    expect(fieldControl.valid).toBeTruthy();

    let e = fieldControl.errors || {} ;
    expect(e['required']).toBeFalsy();

  });

  it('when body is empty', ()=> {
    let fieldControl = component.form.controls['body'];

    expect(fieldControl.valid).toBeFalsy();

    let e = fieldControl.errors || {} ;
    expect(e['required']).toBeTruthy();

  });

  it('when body is valid', ()=> {
    let fieldControl = component.form.controls['body'];

    fieldControl.setValue("test");

    expect(fieldControl.valid).toBeTruthy();

    let e = fieldControl.errors || {} ;
    expect(e['required']).toBeFalsy();

  });

  it('submitting a form', ()=> {
    
    // criei um objeto padrão com dados que eu conheço
    let postValid : PostModel = {
      title : "title",
      body : "body",
      userId : 1,
      id:1
    }
    // setei no form o objeto que eu conheço para preencher os controles do form
    component.form.patchValue(postValid);

    //criei uma variável para guardar o resultado que está sendo emitido para o componente pai
    let postEvent : PostModel = new PostModel();

    // fiz a subscrição no form event (o que emite evento para o pai) para pegar o resultado que foi enviado
    component.formEvent.subscribe({
      next: (ev : PostModel)=> {
        postEvent = ev;
      }
    });

    //método que eu realmente quero testar: acionei o submit do Form
    component.submitForm();

    // comparo o que foi setado no form com o que foi enviado ao filho
    expect(postValid.body).toBe(postEvent.body);
    expect(postValid.title).toBe(postEvent.title);
  })

});


