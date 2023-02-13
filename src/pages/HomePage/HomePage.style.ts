import styled from 'styled-components';

export const StyledHomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

export const StyledHomePageHero = styled.section`
  width: 100%;
  height: 20rem;
  background: rgb(35, 69, 104);
  background: linear-gradient(
    30deg,
    rgba(35, 69, 104, 1) 0%,
    rgba(77, 115, 123, 1) 56%,
    rgba(132, 177, 148, 1) 100%
  );
  display: flex;
  justify-content: center;
`;

export const StyledHomePageHeroContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.smallMaxWidth};

  padding: 3rem;
`;
export const StyledHomePageTitle = styled.h1`
  font-size: 2rem;
  font-family: 'Kalam', cursive;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledHomePageSubtitle = styled.h2`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.darkWhite};
  padding: 1rem 3rem 2rem 0;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
`;

export const StyledHomePagePostsTitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'Kalam', cursive;
  margin: 2rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.navbarBlue};
`;

export const StyledHomePageTitleUnderline = styled.div`
  width: 5rem;
  height: 0.25rem;
  background: ${({ theme }) => theme.colors.yellow};
  margin-bottom: 1rem;
`;
