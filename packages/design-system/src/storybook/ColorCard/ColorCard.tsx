import React from 'react';
import { ColorBlock, Container, ColorText, Title } from './ColorCard.styles';
import { ColorNameType } from '../../colors';

const needBorderColors: ColorNameType[] = ['WHITE'];

const useBorder = (colorName: ColorNameType): boolean => {
  return needBorderColors.includes(colorName);
};

interface CardProps {
  colorName: ColorNameType;
  value: string;
}

const ColorCard = (props: CardProps) => {
  const { colorName, value } = props;

  return (
    <Container>
      <Title>{colorName}</Title>
      <ColorBlock value={value} useBorder={useBorder(colorName)}></ColorBlock>
      <ColorText value={value}>color: {value}</ColorText>
    </Container>
  );
};

export default ColorCard;
