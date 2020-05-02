import styled from 'styled-components';

export const CodeContainer = styled.div`
  background-color: black;
  padding: 0.5rem 1rem;
  font-family: 'Courier New', Courier, monospace;
`;

export const CodeLine = styled.p<{
  format: 'code' | 'comment' | 'blank';
  indent: boolean;
}>`
  color: ${props => (props.format === 'comment' ? '#999' : 'yellow')};
  padding-left: ${props => (props.indent ? '1.25rem' : 0)};
  height: ${props => (props.format === 'blank' ? '1rem' : 'auto')};
`;
