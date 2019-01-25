import React from 'react' 
import { storiesOf } from '@storybook/react';
import MyComponent from './MyComponent';

storiesOf('MyComponent', module)
    .add('with name', () => (
        <MyComponent name="world" />
    ))
