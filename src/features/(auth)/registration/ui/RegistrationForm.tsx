import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { RegisterPayload } from '@/entities/auth'
import FormFiled from '@/shared/ui/form/FormFiled/FormFiled.tsx'
import { Input } from '@/shared/ui/shadcn/Input'
import { User } from 'lucide-react'
import { Button } from '@/shared/ui/shadcn/Button'
import { Lock } from 'lucide-react'
import { RegistrationFormSchema } from '../model/RegistrationFormValidation.schema.ts'
import { PasswordInput } from '@/shared/ui/form/PasswordInput'
import type { RegistrationFormFields } from '../model/registration.type.ts'
import { useRegistrationMutation } from '@/features/(auth)/registration/model/registration.mutation.ts'

const RegistrationForm: FC = () => {
  const { mutate, isPending } = useRegistrationMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegistrationFormSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: RegistrationFormFields) => {
    const registerPayload: RegisterPayload = {
      userName: data.userName,
      password: data.password,
    }
    console.log(registerPayload)
    mutate(registerPayload)
  }

  return (
    <form
      className={'flex flex-col gap-4'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormFiled
        label={'Имя пользователя'}
        required
        errorMessage={errors.userName?.message}
      >
        <Input
          {...register('userName')}
          placeholder={'Укажите имя пользователя'}
          leftIcon={<User />}
          autoComplete={'username'}
        />
      </FormFiled>

      <FormFiled
        label={'Пароль'}
        required
        errorMessage={errors.password?.message}
      >
        <PasswordInput
          {...register('password')}
          placeholder={'Введите пароль'}
          leftIcon={<Lock />}
          autoComplete={'new-password'}
        />
      </FormFiled>

      <FormFiled
        label={'Повторите пароль'}
        required
        errorMessage={errors.confirmPassword?.message}
      >
        <PasswordInput
          {...register('confirmPassword')}
          placeholder={'Введите пароль'}
          leftIcon={<Lock />}
          autoComplete={'new-password'}
        />
      </FormFiled>

      <Button
        className={'mt-6'}
        disabled={isPending}
        type={'submit'}
      >
        Зарегистрироваться
      </Button>
    </form>
  )
}

export { RegistrationForm }
