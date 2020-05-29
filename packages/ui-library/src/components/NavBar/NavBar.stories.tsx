import React from 'react';
import NavBar from './NavBar';
import { componentStoryPath } from '../../storybook';
import {
  ComponentStoryWrapper,
  PropsTableProps,
  StoryCodeLineProps,
} from 'storybook-helpers';

const GuestAvatar = require('../../storybook/assets/guest_avatar.png');

const componentProps: PropsTableProps[] = [
  {
    propName: 'avatarSrc',
    propType: 'string',
    description: 'source for avatar image',
    required: true,
  },
  {
    propName: 'userName',
    propType: 'string',
    description: 'user display name',
    required: true,
  },
];

const usage: StoryCodeLineProps[] = [
  {
    text: 'import { NavBar } from "ui-library";',
  },
  {
    text: '',
    format: 'blank',
  },
  { text: '<NavBar' },
  {
    text: 'avatarSrc={someImgSrc}',
    indent: true,
  },
  {
    text: 'userName="Guest"',
    indent: true,
  },
  {
    text: '/>',
  },
];

export default {
  title: componentStoryPath('NavBar'),
};

export const Default = () => (
  <ComponentStoryWrapper
    name="NavBar"
    description="Navigation bar."
    component={<NavBar avatarSrc={GuestAvatar} userName="Guest" />}
    notes="built-in redirect to '/' when clicking the Nog logo"
    componentProps={componentProps}
    code={usage}
  />
);
