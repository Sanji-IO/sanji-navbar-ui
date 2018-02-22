import { merge } from 'lodash';

import config from './component.resource.json';

export const GET_NAVBAR_STATUS = 'GET_NAVBAR_STATUS';
export const UPDATE_NAVBAR_STATUS = 'UPDATE_NAVBAR_STATUS';
export const UPDATE_NAVBAR_SELECTED_LANG = 'UPDATE_NAVBAR_SELECTED_LANG';
export const GET_NAVBAR_SELECTED_LANG = 'GET_NAVBAR_SELECTED_LANG';
export const UPDATE_NAVBAR_UNREAD_COUNT = 'UPDATE_NAVBAR_UNREAD_COUNT';
export const UPDATE_NAVBAR_NOTIFICATIONS = 'UPDATE_NAVBAR_NOTIFICATIONS';
export const REMOVE_NAVBAR_NOTIFICATIONS = 'REMOVE_NAVBAR_NOTIFICATIONS';

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

  const updateNotifications = notification => {
    return { type: UPDATE_NAVBAR_NOTIFICATIONS, payload: notification };
  };

  const removeNotifications = notification => {
    return { type: REMOVE_NAVBAR_NOTIFICATIONS, payload: notification };
  };

  return {
    getNavbarStatus,
    updateNavbarStatus,
    getSelectedLang,
    updateSelectedLang,
    updateUnreadCount,
    updateNotifications,
    removeNotifications
  };
};

const initNavbarState = {
  config,
  lang: [
    {
      key: 'en',
      label: 'English'
    }
  ],
  notifications: []
};

const isExisting = (array, item) => {
  return array.find(existingItem => existingItem.name === item.name);
};

const doUpdateNotifications = (state, type, payload) => {
  const cloneState = { ...state };

  if (type === UPDATE_NAVBAR_NOTIFICATIONS) {
    if (!isExisting(cloneState.notifications, payload)) {
      cloneState.notifications = [...cloneState.notifications, payload];
      if (!cloneState.config.isShowNotification) {
        cloneState.config.isShowNotification = true;
      }
    }
  } else {
    cloneState.notifications = cloneState.notifications.filter(item => item.name !== payload.name);
    if (cloneState.notifications.length === 0) {
      cloneState.config.isShowNotification = false;
    }
  }
  return cloneState;
};

export const navbar = (state = initNavbarState, { type, payload }) => {
  switch (type) {
    case GET_NAVBAR_STATUS:
      return state;
    case UPDATE_NAVBAR_STATUS:
      return merge({}, state, payload);
    case UPDATE_NAVBAR_UNREAD_COUNT:
      return Object.assign({}, state, { unreadCount: payload });
    case UPDATE_NAVBAR_NOTIFICATIONS:
    case REMOVE_NAVBAR_NOTIFICATIONS:
      return doUpdateNotifications(state, type, payload);
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
