import { CircleLoader } from 'react-spinners';
import styled from 'styled-components';

export const StyledCommentFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

export const StyledCommentFormGroup = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;
export const StyledCommentFormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
  &.optional {
    ::after {
      content: ' (optional)';
      font-size: 0.8rem;
      color: #999;
    }
  }
`;

export const StyledCommentFormInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  font-size: 1.1rem;
  line-height: 1.5;
  color: #333;
`;

export const StyledCommentFormTextarea = styled(StyledCommentFormInput).attrs({
  as: 'textarea',
})`
  resize: vertical;
`;

export const StyledCommentFormButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
`;

export const StyledCommentFormLoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCommentFormErrorList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const StyledCommentFormError = styled.li`
  font-size: 0.9rem;
  color: #dc3545;
  padding: 0.5rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;
