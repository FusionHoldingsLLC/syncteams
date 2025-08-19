// In Next.js, this file would be called: app/providers.tsx
'use client'

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'src/lib/helpers'

export default function TanstackQueryProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
