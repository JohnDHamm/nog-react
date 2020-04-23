import styled from "styled-components"

export const Name = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 0;
`

export const Args = styled.span`
  padding: 0 0.25rem;
  color: green;
  font-size: 1.25rem;
  font-weight: lighter;
  font-style: italic;
`

export const Description = styled.p`
  color: grey;
`

export const SectionTitle = styled.h3`
  color: grey;
  margin-top: 3rem;
`

export const UsageCode = styled.div`
  background-color: black;
  padding: 0.5rem 1rem;
  font-family: 'Courier New', Courier, monospace;
`

export const UsageLine = styled.p<{ format: "code" | "comment", indent: boolean }>`
  color: ${props => props.format === "comment" ? "#999" : "yellow"};
  padding-left: ${props => props.indent ? "1.25rem" : 0};
`

export const UsageResult = styled.p`
  color: #999;
`
