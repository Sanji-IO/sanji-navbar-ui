import { merge } from 'lodash';

import config from './component.resource.json';

export const GET_NAVBAR_STATUS = 'GET_NAVBAR_STATUS';
export const UPDATE_NAVBAR_STATUS = 'UPDATE_NAVBAR_STATUS';
export const UPDATE_NAVBAR_SELECTED_LANG = 'UPDATE_NAVBAR_SELECTED_LANG';
export const GET_NAVBAR_SELECTED_LANG = 'GET_NAVBAR_SELECTED_LANG';
export const UPDATE_NAVBAR_UNREAD_COUNT = 'UPDATE_NAVBAR_UNREAD_COUNT';

/** v2.5 add Notifications feature*/
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

  const removeMotifications = notification => {
    return { type: REMOVE_NAVBAR_NOTIFICATIONS, payload: notification };
  };

  return {
    getNavbarStatus,
    updateNavbarStatus,
    getSelectedLang,
    updateSelectedLang,
    updateUnreadCount,
    updateNotifications,
    removeMotifications
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
  notifications: [
    {
      category: 'info',
      items: []
    }
  ]
};

const doUpdateNotifications = (state, type, payload) => {
  /**
   * @param { category: string, item: {name: string, url: string } } payload
   * v2.5
   * Currently, {category} can only use 'info'. And {name} is a key of i18n. {url} is a AngularJS ui-router to destination.
   */
  const cloneState = { ...state };
  const { notifications } = cloneState;
  const notification = notifications.find(item => item.category === payload.category);

  if (type === UPDATE_NAVBAR_NOTIFICATIONS) {
    notification.items = [...notification.items, payload.item];
  } else {
    notification.items = notification.items.filter(item => item.name !== payload.item.name);
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
