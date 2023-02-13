import styled, { createGlobalStyle } from 'styled-components';

interface Props {
  width?: string;
  height?: string;
  color?: string;
  bg?: string;
  size?: string;
}

export const GlobalStyle = createGlobalStyle`
   *, ::after,
::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
font-family: 'heebo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
:root{
  font-size: clamp(0.5rem, calc(.6rem + 1vw), 1.2rem);
}

h1,
h2,
h3,
h4 {
  
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
body{
  /* background-color: ${({ theme }) => theme.colors.lightGrey}; */
}
ul {
  list-style-type: none;
}
`;
