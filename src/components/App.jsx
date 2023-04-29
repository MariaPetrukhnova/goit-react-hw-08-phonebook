import { Route, Routes } from 'react-router-dom';
import { authOperations } from "redux/authorization";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import useAuth from 'services/authHook';
import { Layout } from './Layout';
import { Box } from "@chakra-ui/react";


const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);


  return isRefreshing ? (
    <h1>Завантаження користувача...</h1>
  ) : (<Box pl={10} pr={10}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<PublicRoute component={<Home/>} />} />
            <Route path="/register" element={<PublicRoute restricted redirectTo='/contacts' component={<Register/>} />} />
            <Route path="/login" element={<PublicRoute restricted redirectTo='/contacts' component={<Login/>} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts/>} /> } />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Box>
    )
}
