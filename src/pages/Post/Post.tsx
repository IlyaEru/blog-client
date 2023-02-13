import dayjs from 'dayjs';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { PostsContext } from '../../App';
import CommentList from '../../components/CommentList/CommentList';

import { PostDocument } from '../../types/post.type';
import {
  StyledCommentsSeparator,
  StyledPostBody,
  StyledPostCommentsTitle,
  StyledPostContainer,
  StyledPostContent,
  StyledPostTitle,
} from './Post.style';

export default function Post() {
  const { postId } = useParams();

  const navigate = useNavigate();

  const { posts, isLoadingPosts } = useContext(PostsContext);

  const [post, setPost] = useState({} as PostDocument);

  if (!postId) {
    navigate('/');
    return <></>;
  }
  useEffect(() => {
    if (!isLoadingPosts) {
      const foundPost = posts.find((post) => post._id === postId);
      if (foundPost) {
        setPost(foundPost);
      } else {
        navigate('/');
      }
    }
  }, [posts]);

  if (isLoadingPosts || !post) {
    return <CircleLoader color="#36d7b7" />;
  }

  return (
    <StyledPostContainer>
      <StyledPostContent>
        <StyledPostTitle>{post.title}</StyledPostTitle>
        <StyledPostBody>{post.body}</StyledPostBody>
        <StyledCommentsSeparator />
        <StyledPostCommentsTitle>Comments</StyledPostCommentsTitle>
        <CommentList postID={postId} />
      </StyledPostContent>
    </StyledPostContainer>
  );
}
