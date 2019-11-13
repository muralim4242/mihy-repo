import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index'


storiesOf('Button', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('Contained Buttons', () =>
    <React.Fragment>
      <Button
        variant="contained">
        Default</Button>
      <Button
        color="primary"
        variant="contained">
        Primary</Button>
      <Button
        color="secondary"
        variant="contained">
        Secondary</Button>
      <Button
        color="secondary"
        variant="contained"
        disabled>
        Disabled</Button>
    </React.Fragment>)

  .add('Text Buttons', () =>
    <React.Fragment>
      <Button
        color="primary">
        Default</Button>
      <Button
        color="primary">
        Primary</Button>
      <Button
        color="secondary">
        Secondary</Button>
      <Button
        color="secondary"
        disabled>
        Disabled</Button>
    </React.Fragment>)

  .add('Outlined Buttons', () =>
    <React.Fragment>
      <Button
        variant="outlined">
        Default</Button>
      <Button
        color="primary"
        variant="outlined">
        Primary</Button>
      <Button
        color="secondary"
        variant="outlined">
        Secondary</Button>
      <Button
        color="secondary"
        variant="outlined"
        disabled>
        Disabled</Button>
    </React.Fragment>)

  .add('Button Sizes', () =>
    <React.Fragment>
      <Button
        color="primary"
        variant="outlined"
        size="small">
        Small</Button>
      <Button
        color="secondary"
        variant="outlined"
        size="medium">
        Medium</Button>
      <Button
        color="secondary"
        variant="outlined"
        size="large">
        Large</Button>
      <br />
      <Button
        color="primary"
        variant="contained"
        size="small">
        Small</Button>
      <Button
        color="secondary"
        variant="contained"
        size="medium">
        Medium</Button>
      <Button
        color="secondary"
        variant="contained"
        size="large">
        Large</Button>
      <br />
    </React.Fragment>)