import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledPostViewContainer = styled.article`
  width: 100%;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 4fr 0.5fr;
  gap: 0.5rem;
  grid-auto-flow: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  margin: 0 2rem 0 4rem;
  &:last-child {
    border-bottom: none;
  }
`;

export const StyledPostViewContent = styled.div``;

export const StyledPostViewTitle = styled(Link)`
  text-transform: capitalize;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryBlue};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDarkBlue};
  }
`;
export const StyledPostViewDate = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledPostViewBody = styled.p`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textGrey};
  margin-top: 1rem;
`;

export const StyledPostViewCommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledPostViewCommentsCount = styled.p``;
