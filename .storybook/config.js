import React from 'react';
import {configure, setAddon} from '@storybook/react';
import {addWithMarkdown} from '../src';

setAddon({addWithMarkdown: addWithMarkdown});

configure(function () {
  require('../example/story');
}, module);
