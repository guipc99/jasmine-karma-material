import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { FormPostsComponent } from './components/form-posts/form-posts.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FormPostsComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule, 
    SharedModule
  ], 

})
export class PostsModule { }
