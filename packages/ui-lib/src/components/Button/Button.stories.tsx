import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="thumbs up emoji">
        👍
      </span>
    </Button>
  ));
