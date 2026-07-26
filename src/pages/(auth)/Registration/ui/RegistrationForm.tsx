import { type FC } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Lock, User } from 'lucide-react'
import type { RegisterPayload } from '@/shared/auth'
import FormFiled from '@/shared/ui/form/FormFiled/FormFiled.tsx'
import { PasswordInput } from '@/shared/ui/form/PasswordInput'
import { Button } from '@/shared/ui/shadcn/Button'
import { Input } from '@/shared/ui/shadcn/Input'
import { RegistrationFormSchema } from '../model/registrationForm.schema'
import type { RegistrationFormFields } from '../model/registrationForm.types'
import { useRegistrationMutation } from '../model/registration.mutation'

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

    mutate(registerPayload)
  }

  return (
    <form className={'flex flex-col gap-4'} onSubmit={handleSubmit(onSubmit)}>
      <FormFiled label={'Имя пользователя'} required errorMessage={errors.userName?.message}>
        <Input
          {...register('userName')}
          placeholder={'Укажите имя пользователя'}
          leftIcon={<User />}
          autoComplete={'username'}
        />
      </FormFiled>

      <FormFiled label={'Пароль'} required errorMessage={errors.password?.message}>
        <PasswordInput
          {...register('password')}
          placeholder={'Введите пароль'}
          leftIcon={<Lock />}
          autoComplete={'new-password'}
        />
      </FormFiled>

      <FormFiled label={'Повторите пароль'} required errorMessage={errors.confirmPassword?.message}>
        <PasswordInput
          {...register('confirmPassword')}
          placeholder={'Введите пароль'}
          leftIcon={<Lock />}
          autoComplete={'new-password'}
        />
      </FormFiled>

      <Button className={'mt-6'} disabled={isPending} type={'submit'}>
        Зарегистрироваться
      </Button>
    </form>
  )
}

export { RegistrationForm }
