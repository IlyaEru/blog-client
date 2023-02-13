import styled from 'styled-components';

export const StyledPostListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.smallMaxWidth};
  gap: 1rem;
  padding: 1.5rem;
`;

export const StyledNoPostsMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primaryBlue};
`;
