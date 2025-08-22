const selectorList = {
  userName: "[name='username']",
  userPassword: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  wrongcredentionsAlert: "[role='alert']",
}

describe('Orange HRM tests', () => {
  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userName).type('Admin')
    cy.get(selectorList.userPassword).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userName).type('Admin')
    cy.get(selectorList.userPassword).type('123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongcredentionsAlert)
  })
})