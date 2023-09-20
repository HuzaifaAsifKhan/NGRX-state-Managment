import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addPost } from 'src/app/post/store/post.action';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  postForm!: FormGroup;

  constructor(private store: Store<IAppState>){
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }


  onAddPost(){
    console.log(this.postForm.value);
    this.store.dispatch(addPost(this.postForm.value));
  }

  showErrors(formProperty:string): string{
    const controler = this.postForm.controls[formProperty];
    if(controler.touched && controler.errors){
      if(controler.errors['required']){
        return `${formProperty} must required`
      } else if(controler.errors['required']){
        return `${formProperty} have Insufficient Length`
      }
      return ''
    }
    return ''
  }
}
