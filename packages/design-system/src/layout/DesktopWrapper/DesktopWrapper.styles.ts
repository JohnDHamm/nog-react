import styled from 'styled-components';

export const StyledContainer = styled.div`
  border: 1px solid red;
  padding: 1rem;
  margin: 1rem;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
