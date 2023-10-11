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

export interface IPostEntity extends EntityState<IPost> {}

export const postAdapter = createEntityAdapter<IPost>();
export const IPostState: IPostEntity = postAdapter.getInitialState();
