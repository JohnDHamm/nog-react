import ComponentStoryWrapper, {
  ComponentProps,
} from './ComponentStoryWrapper/ComponentStoryWrapper';

export const componentStoryPath = (path: string): string =>
  `components/${path}`;

export { ComponentStoryWrapper, ComponentProps };
