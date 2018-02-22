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
    name: 'NOTIFICATIONS_CHANGE_PASSWORD',
    options: {
      clickOutsideToClose: false,
      controller: ($scope, $mdDialog) => {
        'ngInject';

        $scope.fields = formFields;

        $scope.confirm = () => {
          $mdDialog.hide(true);
        };
        $scope.cancel = () => {
          $mdDialog.cancel();
        };
      },
      template: `<md-dialog id="info-dialog" class="info-dialog" aria-label="show change password dialog">
      <md-toolbar class="_md md-moxa-theme _md-toolbar-transitions">
        <div class="md-toolbar-tools">
          <div layout>
          <ng-md-icon icon="warning"></ng-md-icon>
          <h2 id="dialog-title" class="md-title" style="margin-left:5px;">Change Your Password</h2>
          </div>
        </div>
      </md-toolbar>
      <md-dialog-content id="dialog-content" class="md-dialog-content">
        <p class="md-subhead">To protect your accounts....</p>
        <formly-form model="data" fields="fields" form="form">
          <div layout layout-align="end center">
            <md-dialog-actions layout="row">
              <md-button id="dialog-cancel" style="color:#008787; font-weight: bold;" ng-click="cancel()">
                Change it later
              </md-button>
              <md-button id="dialog-confirm" ng-disabled="form.$invalid" class="md-raised md-primary" ng-click="confirm()">
                Submit
              </md-button>
            </md-dialog-actions>
          </div>
        </formly-form>
      </md-dialog-content>
  </md-dialog>`
    }
  },
  {
    name: 'NOTIFICATIONS_CHANGE_TOKEN',
    options: {
      clickOutsideToClose: false,
      controller: ($scope, $mdDialog) => {
        'ngInject';

        $scope.fields = formFields;

        $scope.confirm = () => {
          $mdDialog.hide(true);
        };
        $scope.cancel = () => {
          $mdDialog.cancel();
        };
      },
      template: `<md-dialog id="info-dialog" class="info-dialog" aria-label="show change password dialog">
      <md-toolbar class="_md md-moxa-theme _md-toolbar-transitions">
        <div class="md-toolbar-tools">
          <div layout>
          <ng-md-icon icon="warning"></ng-md-icon>
          <h2 id="dialog-title" class="md-title" style="margin-left:5px;">Change Your Password</h2>
          </div>
        </div>
      </md-toolbar>
      <md-dialog-content id="dialog-content" class="md-dialog-content">
        <p class="md-subhead">To protect your accounts....</p>
        <formly-form model="data" fields="fields" form="form">
          <div layout layout-align="end center">
            <md-dialog-actions layout="row">
              <md-button id="dialog-cancel" style="color:#008787; font-weight: bold;" ng-click="cancel()">
                Change it later
              </md-button>
              <md-button id="dialog-confirm" ng-disabled="form.$invalid" class="md-raised md-primary" ng-click="confirm()">
                Submit
              </md-button>
            </md-dialog-actions>
          </div>
        </formly-form>
      </md-dialog-content>
  </md-dialog>`
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
    });
  });

  it('The notification icon should be visible.', () => {
    cy.get('#navbar-notification').should('be.visible');
  });

  it('The notification message should be found in list.', () => {
    const DOMId = testData[0].name;
    cy.get('#navbar-notification').trigger('mouseover');
    cy.get(`#${DOMId}`);
  });

  it('User click one of notification should show the dialog.', () => {
    const DOMId = testData[0].name;
    cy.get(`#${DOMId}`).click({ force: true });
    cy.get('#info-dialog');
  });

  it('The notification will be removed after user confirm the dialog.', () => {
    const DOMId = testData[0].name;
    cy.get('#dialog-confirm').click({ force: true });
    cy
      .get('#navbar-notification')
      .find('.notification-item')
      .find('a')
      .should('have.attr', 'translate', `${message}`);
  });

  it('User click the last of notification should show the dialog.', () => {
    const DOMId = testData[1].name;
    cy.get(`#${DOMId}`).click({ force: true });
    cy.get('#info-dialog');
    cy.get('#dialog-confirm').click({ force: true });
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
