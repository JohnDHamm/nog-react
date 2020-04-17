import styled from "styled-components"

export const StyledWrapper = styled.div<{alt?: boolean}>`
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: ${props => props.alt ? "darkgrey" : "#bada55"};
  padding: 0.5rem 1rem;
`

export const StyledText = styled.span<{alt?: boolean}>`
  font-size: 1.5rem;
  color: ${props => !props.alt ? "navy" : "white"};
`
