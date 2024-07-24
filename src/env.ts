import { z } from 'zod'

const evnSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

const parsedEnv = evnSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid Enviromnent variables',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid Enviromnent variables.')
}

export const env = parsedEnv.data
