import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Loader from 'components/Loader';
import PrivateRout from 'components/PrivateRout';
import { Background } from 'components/Background';

import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/thunk.auth';
import Header from 'components/Header';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectError,
  selectIsAuth,
  selectIsFetched,
  selectUserId,
} from 'redux/auth/selectors.auth';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { selectDarkTheme } from 'redux/slimDaddy/selectors.slimDaddy';
import { ThemeProvider } from 'styled-components';
import { darkTheme, momsTheme } from './services/theme/theme';

const User = lazy(() => import('pages/User'));
const Home = lazy(() => import('pages/Home'));
const Diary = lazy(() => import('pages/Diary'));
const Login = lazy(() => import('pages/Login'));
const Calculator = lazy(() => import('pages/Calculator'));
const Registration = lazy(() => import('pages/Registration'));

export const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const userId = useSelector(selectUserId);
  const errorMesage = useSelector(selectError);
  const isFetched = useSelector(selectIsFetched);
  const isDark = useSelector(selectDarkTheme);

  const dispatch = useDispatch();
  errorMesage && toast.warn(errorMesage);

  useEffect(() => {
    dispatch(refreshUserThunk());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  return (
    <ThemeProvider theme={isDark ? darkTheme : momsTheme}>
      <Background isAuth={isAuth}>
        <Header />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              index
              element={<Navigate to={isAuth ? `/${userId}/diary` : '/home'} />}
            />
            <Route path="/" element={<PrivateRout />}>
              {isFetched ? (
                <Route path=":userId" element={<User />}>
                  <Route path="diary" element={<Diary />} />
                  <Route path="calculator" element={<Calculator />} />
                </Route>
              ) : (
                <Route path="*" element={<Loader />} />
              )}
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<Registration />} />
            </Route>
            <Route
              path="*"
              element={<Navigate to={isAuth ? `/${userId}/diary` : '/home'} />}
            />
          </Routes>
        </Suspense>

        <ToastContainer autoClose={5000} limit={1} />
      </Background>
    </ThemeProvider>
  );
};
