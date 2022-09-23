import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  Title,
  Subtitle,
  Description,
  Primary as StoryBookPrimary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { store } from '../src/Features/store';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <StoryBookPrimary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title="" />
        </>
      ),
    },
  // },
}

export const decorators = [
  Story => (
    <Provider store={store}>
    <BrowserRouter>
      <Story />
    </BrowserRouter>
    </Provider>
  )
]