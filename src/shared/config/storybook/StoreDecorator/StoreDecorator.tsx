import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type Story } from '@storybook/react'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
  return (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  )
}
