import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';
import { getPostsComments } from '../../helpers/comment';
import { Comment } from '../../types/comment.type';
import CommentForm from '../CommentForm/CommentForm';
import {
  StyledCommentAuthorAndDate,
  StyledCommentBody,
  StyledCommentContent,
  StyledCommentListContainer,
  StyledLoaderContainer,
  StyledNewCommentButton,
} from './CommentList.style';

interface CommentsState {
  comments: Comment[];
  isLoadingComments: boolean;
}

export default function CommentList({ postID }: { postID: string }) {
  const [comments, setComments] = useState<CommentsState>({
    comments: [],
    isLoadingComments: true,
  });
  const [isAddingNewComment, setIsAddingNewComment] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const fetchedComments = await getPostsComments(postID);
      setComments({ comments: fetchedComments, isLoadingComments: false });
    };

    fetchComments();
  }, [postID]);

  const renderComments = () => {
    if (comments.comments.length === 0) {
      return <p>No comments yet</p>;
    } else {
      return (
        <StyledCommentListContainer>
          {comments.comments.map((comment) => (
            <StyledCommentContent key={comment._id}>
              <StyledCommentBody>{comment.body}</StyledCommentBody>
              <StyledCommentAuthorAndDate>
                Comment By {comment.name} on{' '}
                {dayjs(comment.createdAt).format('MMM D, YYYY')}
              </StyledCommentAuthorAndDate>
            </StyledCommentContent>
          ))}
        </StyledCommentListContainer>
      );
    }
  };

  const handleAddNewComment = (comment: Comment) => {
    setComments({
      comments: [...comments.comments, comment],
      isLoadingComments: false,
    });
  };
  return (
    <>
      {comments.isLoadingComments || !postID ? (
        <StyledLoaderContainer>
          <CircleLoader color="#36d7b7" />
        </StyledLoaderContainer>
      ) : (
        <>
          {renderComments()}
          <StyledNewCommentButton
            onClick={() => {
              setIsAddingNewComment(!isAddingNewComment);
            }}
          >
            {isAddingNewComment ? 'Cancel' : 'Add New Comment'}
          </StyledNewCommentButton>
          {isAddingNewComment && (
            <CommentForm
              handleAddNewComment={handleAddNewComment}
              postId={postID}
            />
          )}
        </>
      )}
    </>
  );
}
