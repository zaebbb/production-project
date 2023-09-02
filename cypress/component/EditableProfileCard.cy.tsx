import { EditablePofileCard } from '@/features/EditablePofileCard'
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender'

const USER_ID = '1'

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', {
      fixture: 'profile.json',
    })

    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                username: 'test',
                id: USER_ID,
              },
            },
          },
        }}
      >
        <EditablePofileCard id={USER_ID} />
      </TestProvider>
    )
  })
})
