# sanji-navbar-ui
## Notifications
The notification feature allows the system to show some inportant information to users.
### How to add / remove a notification to navbar

#### 1. Create a notification with a following format
```javascript
const notification = {
  // Currently, we only support 'info' tag.
  category: 'info',
  item: {
    // The name MUST be a key for i18n json.
    name: 'NOTIFICATIONS_CHANGE_PASSWORD',
    // The url should be a name of angularJS ui-router.
    url: 'accounts/'
  }
};
```

#### 2. Use redux to update notification statement
```javascript
// Notice!!: You should inject $ngRedux and navbarAction before you copy the code below.
$ngRedux.dispatch(this.navbarAction.updateNotifications(nitification));
```

#### 3. Use redux to remove a specific notification
```javascript
// Notice!!: You should inject $ngRedux and navbarAction before you copy the code below.
$ngRedux.dispatch(this.navbarAction.removeMotifications(nitification));
```

#### 4. Show notification icon
```javascript
// Notice!!: You should inject $ngRedux and navbarAction before you copy the code below.
$ngRedux.dispatch(this.navbarAction.updateNavbarStatus({ config: { isShowNotification: true } }));
```
