import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import * as constants from '../../styles/constants.js';

import ChapterStack from './ChaptersNavigator.js';
import HomeStack from './HomeNavigator.js';

const AppDrawer = createDrawerNavigator({
  Home: HomeStack,
  Chapter: ChapterStack,
}, {
  initialRouteName: 'Home',
  drawerBackgroundColor: constants.colors.primary,
  contentOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: constants.colors.secondary,
  }
})

export default AppDrawer;
