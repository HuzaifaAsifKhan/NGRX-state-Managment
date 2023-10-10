import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent,
      },
      {
        path: 'edit/:id',
        component: EditPostComponent,
      },
    ],
  },
  {
    path: 'detail/:id',
    component: DetailPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
