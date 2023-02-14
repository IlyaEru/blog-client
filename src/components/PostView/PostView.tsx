import React from 'react';
import { PostDocument } from '../../types/post.type';
import dayjs from 'dayjs';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  StyledPostViewBody,
  StyledPostViewCommentsWrapper,
  StyledPostViewContainer,
  StyledPostViewContent,
  StyledPostViewDate,
  StyledPostViewTitle,
} from './PostView.style';

export default function PostView(props: PostDocument) {
  const { _id: postID, title, body, published, createdAt, comments } = props;

  return (
    <StyledPostViewContainer>
      <StyledPostViewContent>
        <StyledPostViewTitle to={`/post/${postID}`}>
          {title}
        </StyledPostViewTitle>
        <StyledPostViewDate>
          {dayjs(createdAt).format('DD/MM/YYYY')}
        </StyledPostViewDate>
        <StyledPostViewBody>
          {body.length > 100 ? body.substring(0, 100) + '...' : body}
        </StyledPostViewBody>
      </StyledPostViewContent>
      <StyledPostViewCommentsWrapper>
        <p>{comments.length}</p>
        <div className="comments-icon">
          <FaComment />
        </div>
      </StyledPostViewCommentsWrapper>
    </StyledPostViewContainer>
  );
}
