import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { postReducer } from './store/post.reducer';
import { StoreModule } from '@ngrx/store';
import { POST_STATE } from './store/post.selector';


@NgModule({
  declarations: [
    PostComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    StoreModule.forFeature(POST_STATE, postReducer),
  ]
})
export class PostModule { }
