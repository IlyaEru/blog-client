import { useState } from 'react';
import { CircleLoader } from 'react-spinners';
import { createComment } from '../../helpers/comment';
import { Comment } from '../../types/comment.type';
import { validateComment } from '../../validation/comment.validation';
import {
  StyledCommentFormButton,
  StyledCommentFormContainer,
  StyledCommentFormError,
  StyledCommentFormErrorList,
  StyledCommentFormGroup,
  StyledCommentFormInput,
  StyledCommentFormLabel,
  StyledCommentFormLoadingContainer,
  StyledCommentFormTextarea,
} from './CommentForm.style';

interface CommentFormProps {
  postId: string;
  handleAddNewComment: (comment: Comment) => void;
}

export default function CommentForm({
  postId,
  handleAddNewComment,
}: CommentFormProps) {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[]>([]);

  const handleNewCommentSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    setError([]);
    e.preventDefault();
    setIsLoading(true);

    const error = validateComment(name, body);
    if (error) {
      setError(error);
      setIsLoading(false);
      return;
    }
    setError([]);
    const newCommentResponse = await createComment(postId, body, name);
    if (!newCommentResponse) {
      setError(['Something went wrong']);
    } else {
      handleAddNewComment(newCommentResponse);
    }
    setName('');
    setBody('');

    setIsLoading(false);
  };

  return (
    <StyledCommentFormContainer onSubmit={handleNewCommentSubmit}>
      <StyledCommentFormGroup className="form-group">
        <StyledCommentFormLabel className="optional" htmlFor="name">
          Name
        </StyledCommentFormLabel>
        <StyledCommentFormInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          id="name"
        />
      </StyledCommentFormGroup>
      <StyledCommentFormGroup className="form-group">
        <StyledCommentFormLabel htmlFor="body">Comment</StyledCommentFormLabel>
        <StyledCommentFormTextarea
          value={body}
          as="textarea"
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className="form-control"
          id="body"
          rows={3}
        />
      </StyledCommentFormGroup>
      <StyledCommentFormButton type="submit" className="btn btn-primary">
        Submit
      </StyledCommentFormButton>
      {isLoading && (
        <StyledCommentFormLoadingContainer>
          <CircleLoader color="#36d7b7" />
        </StyledCommentFormLoadingContainer>
      )}
      {error.length > 0 && (
        <StyledCommentFormErrorList>
          {error.map((error, index) => (
            <StyledCommentFormError key={index}>{error}</StyledCommentFormError>
          ))}
        </StyledCommentFormErrorList>
      )}
    </StyledCommentFormContainer>
  );
}
