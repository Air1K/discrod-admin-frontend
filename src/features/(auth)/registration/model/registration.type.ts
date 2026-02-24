import { RegistrationFormSchema } from './RegistrationFormValidation.schema.ts'
import { z } from 'zod'

export type RegistrationFormFields = z.infer<typeof RegistrationFormSchema>
