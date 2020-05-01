import React from 'react';
import { ColorBlock, Container, ColorText, Title } from './ColorCard.styles';
import { ColorNameType } from '../../colors';

interface CardProps {
  colorName: ColorNameType;
  value: string;
}

const ColorCard: React.FC<CardProps> = ({ colorName, value }) => {
  return (
    <Container>
      <Title>{colorName}</Title>
      <ColorBlock value={value}></ColorBlock>
      <ColorText value={value}>color: {value}</ColorText>
    </Container>
  );
};

export default ColorCard;
