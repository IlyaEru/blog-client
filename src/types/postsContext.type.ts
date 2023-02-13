import { PostDocument } from './post.type';

export interface PostsContextType {
  posts: PostDocument[];
  isLoadingPosts: boolean;
}
