import styled from 'styled-components';

export const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const StyledPostContent = styled.article`
  max-width: 680px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPostTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 3rem;
  font-family: 'Merriweather', serif;
  font-weight: 700;
  text-align: center;
`;

export const StyledPostBody = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  line-height: 32px;
`;

export const StyledCommentsSeparator = styled.hr`
  width: 5rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 1rem;
  border: none;
  margin: 3rem 1rem 1rem;
`;

export const StyledPostCommentsTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Merriweather', serif;
  text-align: center;
  font-weight: 400;
`;
