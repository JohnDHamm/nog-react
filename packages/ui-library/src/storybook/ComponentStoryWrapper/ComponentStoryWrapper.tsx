import React from 'react';
import {
  ComponentContainer,
  ComponentDescription,
  ComponentName,
  ComponentSubName,
  Notes,
  NotesTitle,
  Table,
  TableContainer,
  TableData,
  TableHeader,
  TableTitle,
} from './ComponentStoryWrapper.styles';

export interface ComponentProps {
  propName: string;
  propType: 'string' | 'number' | 'boolean' | '() => fn';
  description: string;
  required: boolean;
}

interface ComponentStoryWrapperProps {
  name: string;
  subName?: string;
  description?: string;
  component: JSX.Element;
  notes?: string;
  componentProps?: Array<ComponentProps>;
}

const renderPropsTable = (props: Array<ComponentProps>) => {
  return (
    <TableContainer>
      <TableTitle>Props</TableTitle>
      <Table>
        <thead>
          <tr>
            <TableHeader>Prop</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </tr>
        </thead>
        <tbody>
          {props.map(prop => (
            <tr>
              <TableData>{prop.propName}</TableData>
              <TableData>{prop.propType}</TableData>
              <TableData>{prop.description}</TableData>
              <TableData>{prop.required ? '✔' : null}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

const ComponentStoryWrapper = (props: ComponentStoryWrapperProps) => {
  const {
    name,
    component,
    subName,
    description,
    componentProps,
    notes,
  } = props;

  return (
    <div>
      <ComponentName>{name}</ComponentName>
      {subName && <ComponentSubName>/{subName}</ComponentSubName>}
      {description && (
        <ComponentDescription>{description}</ComponentDescription>
      )}
      <ComponentContainer>{component}</ComponentContainer>
      {notes && (
        <>
          <NotesTitle>Notes</NotesTitle>
          <Notes>{notes}</Notes>
        </>
      )}
      {componentProps && renderPropsTable(componentProps)}
    </div>
  );
};

export default ComponentStoryWrapper;
