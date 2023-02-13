import { Link } from 'react-router-dom';
import {
  StyledGithubIcon,
  StyledGithubLink,
  StyledHeader,
  StyledHeaderContent,
  StyledLogo,
} from './NavBar.style';

export default function NavBar() {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <StyledLogo to="/">Blog</StyledLogo>
        <StyledGithubLink href="https://github.com/IlyaEru" target="_blank">
          <StyledGithubIcon />
        </StyledGithubLink>
      </StyledHeaderContent>
    </StyledHeader>
  );
}
