import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { updatePost } from 'src/app/post/store/post.action';
import { getPostById } from 'src/app/post/store/post.selector';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnDestroy {
  postForm!: FormGroup;
  postId!: string; 
  subs!: Subscription

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router
  ){
    this.route.paramMap.subscribe(item => {
      this.postId = item.get('id') || '';
      this.createForm();
      this.subs = this.store.select(getPostById, this.postId).subscribe({
        next: (resp) => {
          this.postForm.reset();
          this.postForm.patchValue({
            id: resp.id,
            title: resp.title,
            description: resp.description
          })
        }
      });
    })
  }

  createForm(){
    this.postForm = new FormGroup({
      id: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }

  onUpdatePost(){
    this.store.dispatch(updatePost({updatedPost: this.postForm.value}));
    this.postForm.reset();
    this.router.navigate(['/post']);
  }

  showErrors(formProperty:string): string{
    const controler:any = this.postForm.controls[formProperty];
    if((controler.touched || controler.dirty) && controler.errors){
      if(controler.errors['required']){
        return `${formProperty} must required`
      } else if(controler.errors['minlength']){
        return `${formProperty} have Insufficient Length`
      }
      return '';
    }
    return '';
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
