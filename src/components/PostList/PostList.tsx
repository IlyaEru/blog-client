import { useContext, useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import { PostsContext } from '../../App';
import { PostDocument } from '../../types/post.type';
import PostView from '../PostView/PostView';
import {
  StyledNoPostsMessage,
  StyledPostListContainer,
} from './PostList.style';

export default function PostList() {
  const { posts, isLoadingPosts } = useContext(PostsContext);
  const [publishedPosts, setPublishedPosts] = useState([] as PostDocument[]);

  useEffect(() => {
    if (!isLoadingPosts) {
      setPublishedPosts(posts.filter((post) => post.published));
    }
  }, [posts]);
  if (isLoadingPosts) {
    return <CircleLoader color="#36d7b7" />;
  }
  return (
    <StyledPostListContainer>
      {publishedPosts.length === 0 ? (
        <StyledNoPostsMessage>No posts yet</StyledNoPostsMessage>
      ) : (
        publishedPosts.map((post) => <PostView key={post._id} {...post} />)
      )}
    </StyledPostListContainer>
  );
}
