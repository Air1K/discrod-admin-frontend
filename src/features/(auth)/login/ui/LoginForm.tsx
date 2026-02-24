import { type FC } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormSchema } from '@/features/(auth)/login/model/loginFormValidation.schema.ts'
import { useForm } from 'react-hook-form'
import { Input } from '@/shared/ui/shadcn/Input'
import { Lock, User } from 'lucide-react'
import type { LoginPayload } from '@/entities/auth'
import { Button } from '@/shared/ui/shadcn/Button'
import { Link } from 'react-router'
import FormFiled from '@/shared/ui/form/FormFiled/FormFiled.tsx'
import { RHFCheckbox } from '@/shared/ui/form/CheckBoxRHF/CheckBoxRHF.tsx'
import { PasswordInput } from '@/shared/ui/form/PasswordInput'

const LoginForm: FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
    mode: 'onSubmit',
  })

  const onSubmit = (data: LoginPayload) => {
    console.log(data)
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
          autoComplete={'current-password'}
        />
      </FormFiled>

      <div className={'flex justify-between items-center'}>
        <FormFiled
          name={'rememberMe'}
          label={'Запомнить меня?'}
          errorMessage={errors.rememberMe?.message}
          orientation={'horizontal'}
          revers
        >
          <RHFCheckbox control={control} name={'rememberMe'} />
        </FormFiled>
        <Button variant={'text'} asChild>
          <Link to={''}>Забыли пароль?</Link>
        </Button>
      </div>
      <Button type={'submit'}>Войти</Button>
    </form>
  )
}

export { LoginForm }
