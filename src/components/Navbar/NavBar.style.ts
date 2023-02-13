import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.navbarBlue};
`;
export const StyledHeaderContent = styled.div`
  max-width: ${({ theme }) => theme.smallMaxWidth};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const StyledLogo = styled(Link)`
  font-family: 'Playfair Display', serif;
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  color: ${({ theme }) => theme.colors.darkWhite};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.brightWhite};
  }
`;

export const StyledGithubLink = styled.a`
  color: ${({ theme }) => theme.colors.darkWhite};
  &:hover {
    color: ${({ theme }) => theme.colors.brightWhite};
  }
`;

export const StyledGithubIcon = styled(FaGithub)`
  font-size: 1.2rem;
`;
