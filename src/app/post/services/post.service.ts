import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPost } from '../store/post.state';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts = (): Observable<IPost[]> => {
    return this.http
      .get<IPost[]>(
        'https://rtf-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((data) => {
          const posts: IPost[] = [];
          for (let key in data) {
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  };

  addPost = (post: IPost): Observable<{ name: string }> => {
    return this.http.post<{ name: string }>(
      'https://rtf-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      post
    );
  };

  updatePost = (post: IPost): Observable<{}> => {
    const updatedPost = {
      [post.id]: {
        title: post.title,
        description: post.description,
      },
    };
    return this.http.patch<{}>(
      'https://rtf-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      updatedPost
    );
  };

  deletePost = (id: string): Observable<any> => {
    return this.http.delete<any>(
      `https://rtf-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`
    );
  };

  postById = (id: string): Observable<IPost> => {
    return this.http.get<IPost>(
      `https://rtf-firebase-default-rtdb.asia-southeast1.firebasedatabase.app/posts/${id}.json`
    );
  };
}
