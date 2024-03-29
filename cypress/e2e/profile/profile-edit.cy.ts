let profileId = ''

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.commandLogin('testUser', 'testPassword').then(data => {
      profileId = data.id
      cy.visit(`/profile/${profileId}`)
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('Успешная загрузка', () => {
    cy.getByTestId('profile-card-firstname').should('have.value', 'test')
  })

  it('Редактирование', () => {
    const profileData = 'new data'

    cy.updateProfile(profileData, profileData)
    cy.getByTestId('profile-card-firstname').should('have.value', profileData)
    cy.getByTestId('profile-card-lastname').should('have.value', profileData)
    cy.getByTestId('profile-card-lastname')
  })
})
