'use client'

import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '@/stores/configureStore'

type AppProviderProps = {
  children: React.ReactNode
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense fallback={'loading'}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </Suspense>
  )
}
