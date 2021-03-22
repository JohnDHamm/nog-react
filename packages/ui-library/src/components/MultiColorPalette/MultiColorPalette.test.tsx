import React from 'react';
import MultiColorPalette, { ColorPaletteObject } from './MultiColorPalette';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { subTestIdInit } from 'function-library';

describe('MultiColorPalette', () => {
  const testid = 'MultiColorPalette';
  const subTestid = subTestIdInit(testid);

  const handleCurrentColorNumChange = jest.fn();
  const handleColorChange = jest.fn();

  const initialColors: Array<ColorPaletteObject> = [
    { colorNum: 0, colorVal: '#ff0000' },
    { colorNum: 1, colorVal: '#ffff00' },
    { colorNum: 2, colorVal: '#00ff00' },
    { colorNum: 3, colorVal: '#00ffff' },
    { colorNum: 4, colorVal: '#0000ff' },
    { colorNum: 5, colorVal: '#ff00ff' },
    { colorNum: 6, colorVal: '#ffffff' },
    { colorNum: 7, colorVal: '#000000' },
    { colorNum: 8, colorVal: '' },
    { colorNum: 9, colorVal: '' },
    { colorNum: 10, colorVal: '' },
    { colorNum: 11, colorVal: '' },
    { colorNum: 12, colorVal: '' },
    { colorNum: 13, colorVal: '' },
    { colorNum: 14, colorVal: '' },
    { colorNum: 15, colorVal: '#bada55' },
  ];

  it('should render with initial color wells', () => {
    render(
      <MultiColorPalette
        colors={initialColors}
        onCurrentColorNumChange={handleCurrentColorNumChange}
        onColorChange={handleColorChange}
      />
    );
    expect(screen.getByTestId(testid)).toBeInTheDocument();
    expect(
      screen.getByTestId(subTestid('CurrentColorWell'))
    ).toBeInTheDocument();
    expect(screen.getByTestId(subTestid('ColorWells'))).toBeInTheDocument();
    expect(
      screen.queryByTestId(subTestid('ColorPicker'))
    ).not.toBeInTheDocument();
  });

  it('should call the onCurrentColorNumChange prop when an existing color well is clicked', () => {
    render(
      <MultiColorPalette
        colors={initialColors}
        onCurrentColorNumChange={handleCurrentColorNumChange}
        onColorChange={handleColorChange}
      />
    );
    userEvent.click(screen.getByTestId(subTestid('ColorWell-0')));
    expect(handleCurrentColorNumChange).toHaveBeenCalledTimes(1);
  });

  it('should show the color picker and hide color wells when an empty custom color well is clicked', () => {
    render(
      <MultiColorPalette
        colors={initialColors}
        onCurrentColorNumChange={handleCurrentColorNumChange}
        onColorChange={handleColorChange}
      />
    );
    userEvent.click(screen.getByTestId(subTestid('ColorWell-8')));
    expect(screen.getByTestId(subTestid('ColorPicker'))).toBeInTheDocument();
    expect(
      screen.queryByTestId(subTestid('ColorWells'))
    ).not.toBeInTheDocument();
  });

  it('should call the onColorChange prop when a custom color is saved and close the color picker', () => {
    render(
      <MultiColorPalette
        colors={initialColors}
        onCurrentColorNumChange={handleCurrentColorNumChange}
        onColorChange={handleColorChange}
      />
    );
    userEvent.click(screen.getByTestId(subTestid('ColorWell-8')));
    userEvent.click(screen.getByText('save'));
    expect(handleColorChange).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId(subTestid('ColorWells'))).toBeInTheDocument();
    expect(
      screen.queryByTestId(subTestid('ColorPicker'))
    ).not.toBeInTheDocument();
  });

  it('should show the color picker to edit a defined custom color by clicking on the current color well', () => {
    render(
      <MultiColorPalette
        colors={initialColors}
        onCurrentColorNumChange={handleCurrentColorNumChange}
        onColorChange={handleColorChange}
      />
    );
    userEvent.click(screen.getByTestId(subTestid('ColorWell-15')));
    userEvent.click(screen.getByTestId(subTestid('CurrentColorWell')));
    expect(screen.getByTestId(subTestid('ColorPicker'))).toBeInTheDocument();
    expect(
      screen.queryByTestId(subTestid('ColorWells'))
    ).not.toBeInTheDocument();
  });
});
