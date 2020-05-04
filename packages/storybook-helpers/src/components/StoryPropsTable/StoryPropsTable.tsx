import React from 'react';
import { Table, TableData, TableHeader } from './StoryPropsTable.styles';
import StorySectionTitle from '../StorySectionTitle/StorySectionTitle';

export interface PropsTableProps {
  propName: string;
  propType: string;
  description: string;
  required: boolean;
}

export interface StoryPropsTableProps {
  title?: string;
  componentProps: Array<PropsTableProps>;
}

const StoryPropsTable: React.FC<StoryPropsTableProps> = ({
  componentProps,
  title = 'Props'
}) => {
  return (
    <>
      <StorySectionTitle title={title} />
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
