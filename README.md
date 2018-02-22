# sanji-navbar-ui
## Notifications
The notification feature allows the system to show important information to users.
### How to add / remove a notification to navbar

#### 1. Create a notification with a following format
```javascript
const notification = {
  name:'',
  options: dialogObject
};

// About dialog Object, please see:
// https://material.angularjs.org/latest/api/service/$mdDialog#mddialog-show-optionsorpreset
```

#### 2. Use redux to update notification statement
```javascript
// Notice!!: You should inject $ngRedux and navbarAction before you copy the code below.
$ngRedux.dispatch(this.navbarAction.updateNotifications(nitification));
```

#### 3. Use redux to remove a specific notification
```javascript
// Notice!!: You should inject $ngRedux and navbarAction before you copy the code below.
$ngRedux.dispatch(this.navbarAction.removeNotifications(nitification));
```
