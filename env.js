import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  /**
   * 🔒 Server-side environment variables
   * Never exposed to the client.
   */
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

    // Required in production, optional in dev/test
  },

  /**
   * 🌐 Client-side environment variables
   * Must be prefixed with NEXT_PUBLIC_ to be exposed to the client.
   */
  client: {
    NEXT_PUBLIC_API_URL: z.string(),
  },

  /**
   * ⚡ Runtime values
   * Needed since process.env cannot be destructured directly
   * in Next.js Edge runtimes or client-side.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  /**
   * ⚙️ Options
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
})
