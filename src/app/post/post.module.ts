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
import { PostService } from './services/post.service';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post.effects';
import { DetailPostComponent } from './components/detail-post/detail-post.component';

@NgModule({
  declarations: [PostComponent, AddPostComponent, EditPostComponent, DetailPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostRoutingModule,
    EffectsModule.forFeature([PostEffects]),
    StoreModule.forFeature(POST_STATE, postReducer),
  ],
  providers: [PostService],
})
export class PostModule {}
