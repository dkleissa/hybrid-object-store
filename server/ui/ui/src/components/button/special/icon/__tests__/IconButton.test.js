// vendor
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
// components
import IconButton from '../IconButton';

describe('IconButton', () => {
  it('Renders svg', () => {
    const click = jest.fn();

    const { container } = render(
      <IconButton
        click={click}
        disabled={true}
        icon={faCopy}
        color="white"
      />
    );
    const svgElement = container.querySelector('svg');

    expect(svgElement).toBeInTheDocument();
  });


  it('Renders button disabled', () => {
    render(
      <IconButton
        click={jest.fn}
        disabled={true}
        icon={faCopy}
        color="white"
      />
    );
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  });


  it('Test Click', () => {
    const click = jest.fn();

    render(
      <IconButton
        click={click}
        disabled={false}
        icon={faCopy}
        color="white"
      />
    );

    userEvent.click(screen.getByRole('button'))
    expect(click).toHaveBeenCalledTimes(1);
  });


  it('Test Click disabled', () => {
    const click = jest.fn();

    render(
      <IconButton
        click={click}
        disabled={true}
        icon={faCopy}
        color="white"
      />
    );

    userEvent.click(screen.getByRole('button'));
    expect(click).toHaveBeenCalledTimes(0);
  });

});
