import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CounterComponent } from "./counter/counter.component";
import { PostListComponent } from './post/post-list/post-list.component';
import { AddPostComponent } from './post/post-list/components/add-post/add-post.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path : 'counter',
        component: CounterComponent
    },
    {
        path : 'post',
        component: PostListComponent,
        children: [
            {
                path: 'add',
                component: AddPostComponent
            }
        ]
    }
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}