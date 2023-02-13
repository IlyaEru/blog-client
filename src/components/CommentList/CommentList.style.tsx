import styled from 'styled-components';

export const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCommentListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 680px;
  gap: 1rem;
`;

export const StyledCommentContent = styled.article`
  width: 100%;
  padding: 0.5rem 1.5rem;
  border: none;
`;

export const StyledCommentBody = styled.p`
  margin-bottom: 1rem;
  text-transform: capitalize;
  line-height: 1.5rem;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
`;

export const StyledCommentAuthorAndDate = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const StyledNewCommentButton = styled.button`
  margin: 3rem 1rem 1rem;
  min-width: 12rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.darkYellow};
  }
`;
