import React from "react"
import {
  Args,
  Description,
  Name,
  SectionTitle,
  UsageCode,
  UsageLine
} from "./FunctionStoryWrapper.styles"

interface UsageProps {
  text: string;
  format?: "comment" | undefined;
  indent?: boolean | undefined;
}

interface FunctionStoryWrapperProps {
  name: string;
  description?: string;
  args?: string;
  notes?: string;
  usage?: Array<UsageProps>;
}

const renderUsageLine = (line: UsageProps) => {
  return (
    <UsageLine format={line.format} indent={line.indent}>{line.text}</UsageLine>
  )
}

const FunctionStoryWrapper = (props: FunctionStoryWrapperProps) => {
  const {
    args,
    description,
    name,
    notes,
    usage
  } = props

  return (
    <>
      <Name>{name}(<Args>{args}</Args>)</Name>
      {description && <Description>{description}</Description>}
      <SectionTitle>Usage</SectionTitle>
      { usage && (
        <UsageCode>
          {usage.map((line: UsageProps) => renderUsageLine(line))}
        </UsageCode>
      )}
      {notes && (
        <>
          <SectionTitle>Notes</SectionTitle>
          <div>{notes}</div>
        </>
      )}
    </>
  )
}

export default FunctionStoryWrapper
