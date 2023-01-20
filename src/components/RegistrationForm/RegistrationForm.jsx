import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/thunk.auth';
import { LoginLink } from './RegistrationForm.styled';
import RegistrationBtn from 'components/RegistrationBtn';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from 'services/validation/registerSchema';
import {
  ContainerBtn,
  RegisterForm,
  RegisterLabel,
  RegisterInput,
  RegisterTitle,
} from './RegistrationForm.styled';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function RegistrationForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(registerSchema),
  });

  const dispatch = useDispatch();
  const onSubmit = async data => {
    try {
      const { user } = await dispatch(signUpThunk(data)).unwrap();
      reset();
      toast.dismiss();
      await navigate(`/${user.id}/calculator`);
    } catch (error) {}
  };

  const { username, email, password } = errors;

  return (
    <>
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <RegisterTitle>Register</RegisterTitle>

        <RegisterLabel htmlFor="name">
          Name *
          <RegisterInput
            {...register('username')}
            id="name"
            required
            type="text"
          />
          {username && toast.error(username.message)}
        </RegisterLabel>
        <RegisterLabel htmlFor="email">
          Email *
          <RegisterInput
            {...register('email')}
            id="email"
            required
            name="email"
            type="email"
          />
          {email && toast.error(email.message)}
        </RegisterLabel>
        <RegisterLabel htmlFor="password">
          Password *
          <RegisterInput
            {...register('password')}
            id="password"
            required
            name="password"
            type="password"
          />
          {password && toast.error(password.message)}
        </RegisterLabel>
        <ContainerBtn>
          <LoginLink to="/login">Login</LoginLink>
          <RegistrationBtn />
        </ContainerBtn>
      </RegisterForm>
    </>
  );
}
