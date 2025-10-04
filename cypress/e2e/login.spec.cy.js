import userData from '../fixtures/users/userData.json'

describe('Orange HRM tests', () => {

const selectorList = {
  userName: "[name='username']",
  userPassword: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: "[class='oxd-layout-context']",
  wrongcredentionsAlert: "[role='alert']",
}


  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userName).type(userData.userSuccess.userName)
    cy.get(selectorList.userPassword).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })
  it('Login - Fail',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userName).type(userData.userfail.userName)
    cy.get(selectorList.userPassword).type(userData.userfail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongcredentionsAlert)
  })
})