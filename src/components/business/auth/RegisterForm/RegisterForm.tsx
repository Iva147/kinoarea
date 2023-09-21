import { Input } from '../../../ui/Input/Input'
import { Typography, TypographyTypes } from '../../../ui/Typography/Typography'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { IRegisterFields, RegisterFields, registerSchemas } from '../../../../api/types/schemas'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../../ui/Button/Button'
import { Checkbox } from '../../../ui/Checkbox/Checkbox'
import { Link } from 'react-router-dom'
import { useActions } from '../../../../hooks/useActions'

const fields: { id: string; name: RegisterFields & string; label: string }[] = [
  { id: '1', name: 'name', label: 'Имя' },
  { id: '2', name: 'surname', label: 'Фамилия' },
  { id: '3', name: 'login', label: 'Придумайте логин' },
  { id: '4', name: 'password', label: 'Придумайте пароль' },
  { id: '5', name: 'repeatPassword', label: 'Повторите пароль' },
  { id: '6', name: 'tel', label: 'Номер телефона или e-mail' },
]
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(registerSchemas),
  })
  const { createUser } = useActions()

  const onSubmit: SubmitHandler<IRegisterFields> = data => {
    const { name, surname, password, login } = data
    createUser({ name, surname, password, login })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'form'}>
      <Typography variant={'h2'} type={TypographyTypes._TITLE} className={'mb:3 text-center md_h:mb-6'}>
        Зарегистрироваться
      </Typography>
      {fields.map(field => (
        <Input
          label={field.label}
          name={field.name}
          register={register}
          error={errors[field.name]?.message}
          key={field.id}
        />
      ))}
      <div className={'flex flex-col gap-[9px]'}>
        <Controller
          name={'privacy_policy'}
          control={control}
          defaultValue={true}
          render={({ field }) => (
            <Checkbox
              label={
                <p>
                  Соглашаюсь на условия{' '}
                  <Link to={'/'} className={'text-yellowish'}>
                    политики конфиденциальности
                  </Link>
                </p>
              }
              isChecked={!!field.value}
              onChange={data => field.onChange(data)}
              name={'privacy_policy'}
            />
          )}
        />

        <Controller
          name={'personal_data'}
          control={control}
          defaultValue={true}
          render={({ field }) => (
            <Checkbox
              label={'Соглашаюсь на обработку персональных данных'}
              isChecked={!!field.value}
              onChange={field.onChange}
              name={'personal_data'}
            />
          )}
        />
      </div>
      <Button variant={'yellow'} type={'submit'} className={'w-full'}>
        Зарегистрироваться
      </Button>
    </form>
  )
}
