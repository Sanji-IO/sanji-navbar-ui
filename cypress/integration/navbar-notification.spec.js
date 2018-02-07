const getRedux = () => {
  return new Cypress.Promise((resolve, reject) => {
    cy.get('md-toolbar').then(element => {
      cy
        .window()
        .its('angular')
        .then(angular => {
          const injector = angular.element(element).injector();
          resolve({ redux: injector.get('$ngRedux'), action: injector.get('navbarAction') });
        });
    });
  });
};

const testData = [
  {
    category: 'info',
    item: {
      name: 'NOTIFICATIONS_CHANGE_PASSWORD',
      url: 'accounts/'
    }
  },
  {
    category: 'info',
    item: {
      name: 'NOTIFICATIONS_CHANGE_TOKEN',
      url: 'tokens/'
    }
  }
];

describe('Navbar Notification Test', () => {
  before(() => {
    cy.visit('/');
  });

  it('The notification icon should be invisible before add data.', () => {
    cy
      .get('md-toolbar')
      .find('#navbar-notification')
      .should('not.exist');
  });

  it('Add test data and show the notification icon.', () => {
    // Add test data to the statement.
    getRedux().then(injector => {
      testData.forEach(data => {
        injector.redux.dispatch(injector.action.updateNotifications(data));
      });
      injector.redux.dispatch(injector.action.updateNavbarStatus({ config: { isShowNotification: true } }));
    });
  });

  it('The notification icon should be visible.', () => {
    cy.get('#navbar-notification').should('be.visible');
  });

  it('The notification message should be found in list.', () => {
    const message = testData[0].item.name;
    cy.get('#navbar-notification').click();
    cy
      .get('#navbar-notification')
      .find('.notification-item')
      .find('a')
      .should('have.attr', 'translate', `${message}`);
  });

  it('Remove a specific notification', () => {
    getRedux().then(injector => {
      injector.redux.dispatch(injector.action.removeMotifications(testData[0]));
    });
  });

  it('The Removed notification is removed from the notification list.', () => {
    const message = testData[0].item.name;
    cy
      .get('#navbar-notification')
      .find('.notification-item')
      .find('a')
      .should('not.have.attr', 'translate', `${message}`);
  });
});
