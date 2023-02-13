import { Comment } from './comment.type';

export interface PostDocument {
  _id: string;
  title: string;
  body: string;
  createdAt: Date;
  comments: Comment[];
  published: boolean;
}
