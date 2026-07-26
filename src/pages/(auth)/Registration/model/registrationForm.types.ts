import { z } from 'zod'
import { RegistrationFormSchema } from './registrationForm.schema'

export type RegistrationFormFields = z.infer<typeof RegistrationFormSchema>
