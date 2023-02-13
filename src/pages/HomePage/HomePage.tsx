import PostList from '../../components/PostList/PostList';
import {
  StyledHomePageContainer,
  StyledHomePageHero,
  StyledHomePageHeroContentWrapper,
  StyledHomePagePostsTitle,
  StyledHomePageSubtitle,
  StyledHomePageTitle,
  StyledHomePageTitleUnderline,
} from './HomePage.style';

export default function HomePage() {
  return (
    <StyledHomePageContainer>
      <StyledHomePageHero>
        <StyledHomePageHeroContentWrapper>
          <StyledHomePageTitle>Welcome to my blog!</StyledHomePageTitle>
          <StyledHomePageSubtitle>
            Never stop learning and exploring new topics and ideas, and you will
            never stop growing.
          </StyledHomePageSubtitle>
        </StyledHomePageHeroContentWrapper>
      </StyledHomePageHero>
      <StyledHomePagePostsTitle>Latest posts</StyledHomePagePostsTitle>
      <StyledHomePageTitleUnderline />
      <PostList />
    </StyledHomePageContainer>
  );
}
