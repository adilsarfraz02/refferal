'use client'

import {NextUIProvider} from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function UIProvider({ children }) {
    const route = useRouter()
  return (
    <SessionProvider>
    <NextUIProvider navigate={route.push}>
      {children}
      </NextUIProvider>
    </SessionProvider>
  )
}