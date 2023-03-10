import LoginBtn from 'components/LoginBtn';
import { ContainerBtn } from 'components/RegistrationForm/RegistrationForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { logInThunk } from 'redux/auth/thunk.auth';
import {
  AuthForm,
  AuthInput,
  AuthLabel,
  AuthTitle,
  RegisterLink,
} from './LoginForm.styled';
import { loginSchema } from 'services/validation/loginSchema';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // mode: 'onBlur',
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = async data => {
    try {
      const { user } = await dispatch(logInThunk(data)).unwrap();
      reset();
      toast.dismiss();
      navigate(`/${user.id}/diary`);
    } catch (error) {}
  };

  const { email, password } = errors;

  return (
    <>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <AuthTitle>Sign In</AuthTitle>
        <AuthLabel htmlFor="email">
          Email *
          <AuthInput
            {...register('email')}
            id="email"
            required
            name="email"
            type="email"
          />
          {email && toast.error(email.message)}
        </AuthLabel>
        <AuthLabel htmlFor="password">
          Password *
          <AuthInput
            {...register('password')}
            id="password"
            required
            name="password"
            type="password"
          />
          {password && toast.error(password.message)}
        </AuthLabel>
        <ContainerBtn>
          <LoginBtn />
          <RegisterLink to="/registration">Register</RegisterLink>
        </ContainerBtn>
      </AuthForm>
    </>
  );
}
