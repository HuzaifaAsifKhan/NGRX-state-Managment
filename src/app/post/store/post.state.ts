import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface IPost {
  id: string;
  title: string;
  description: string;
}
// Post State
// export class IPostState {
//   posts: IPost[] = [
//     // {
//     //     id: '1',
//     //     title: 'first title',
//     //     description: 'description of First title'
//     // },
//     // {
//     //     id: '2',
//     //     title: 'second title',
//     //     description: 'description of Second title'
//     // }
//   ];
// }

export interface IPostEntity extends EntityState<IPost> {
  count: number;
}

export const postAdapter = createEntityAdapter<IPost>({
  // selectId: (post: IPost) => post.id, //id is maintainig by default so dont need to do that
  sortComparer: sortByName,
});
export const IPostState: IPostEntity = postAdapter.getInitialState({
  count: 0,
});

export function sortByName(a: IPost, b: IPost): number {
  return a.title.localeCompare(b.title);
}
