import React from 'react';
import { Table, TableData, TableHeader } from './StoryPropsTable.styles';
import StorySectionTitle from '../StorySectionTitle/StorySectionTitle';

export interface ComponentProps {
  propName: string;
  propType: 'string' | 'number' | 'boolean' | '() => fn';
  description: string;
  required: boolean;
}

export interface StoryPropsTableProps {
  componentProps: Array<ComponentProps>;
}

const StoryPropsTable: React.FC<StoryPropsTableProps> = ({
  componentProps
}) => {
  return (
    <>
      <StorySectionTitle title="Props" />
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
          {componentProps.map((prop, idx) => (
            <tr key={idx}>
              <TableData>{prop.propName}</TableData>
              <TableData>{prop.propType}</TableData>
              <TableData>{prop.description}</TableData>
              <TableData>{prop.required ? '✔' : null}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StoryPropsTable;
