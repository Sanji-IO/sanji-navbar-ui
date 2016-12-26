import { merge } from 'lodash';

import config from './component.resource.json';

export const GET_NAVBAR_STATUS = 'GET_NAVBAR_STATUS';
export const UPDATE_NAVBAR_STATUS = 'UPDATE_NAVBAR_STATUS';
export const UPDATE_NAVBAR_SELECTED_LANG = 'UPDATE_NAVBAR_SELECTED_LANG';
export const GET_NAVBAR_SELECTED_LANG = 'GET_NAVBAR_SELECTED_LANG';
export const UPDATE_NAVBAR_UNREAD_COUNT = 'UPDATE_NAVBAR_UNREAD_COUNT';

export const NavbarAction = $translate => {
  'ngInject';

  const getNavbarStatus = () => {
    return { type: GET_NAVBAR_STATUS };
  };

  const updateNavbarStatus = payload => {
    return { type: UPDATE_NAVBAR_STATUS, payload };
  };

  const getSelectedLang = () => {
    return { type: GET_NAVBAR_SELECTED_LANG, payload: $translate.use() };
  };

  const updateSelectedLang = key => {
    return { type: UPDATE_NAVBAR_SELECTED_LANG, payload: $translate.use(key) };
  };

  const updateUnreadCount = count => {
    return { type: UPDATE_NAVBAR_UNREAD_COUNT, payload: count };
  };

  return {
    getNavbarStatus,
    updateNavbarStatus,
    getSelectedLang,
    updateSelectedLang,
    updateUnreadCount
  };
};

const initNavbarState = {
  config,
  lang: [{
    key: 'en',
    label: 'English'
  }]
};

export const navbar = (state = initNavbarState, { type, payload }) => {
  switch (type) {
    case GET_NAVBAR_STATUS:
      return state;
    case UPDATE_NAVBAR_STATUS:
      return merge({}, state, payload);
    case UPDATE_NAVBAR_UNREAD_COUNT:
      return Object.assign({}, state, {unreadCount: payload});
    default:
      return state;
  }
};

export const lang = (state = 'en', { type, payload }) => {
  switch (type) {
    case GET_NAVBAR_SELECTED_LANG:
      return payload || state;
    default:
      return state;
  }
};
