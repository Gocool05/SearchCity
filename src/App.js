import logo from './logo.svg';
import { Refine, Authenticated } from "@refinedev/core";
import { DataProvider } from "@refinedev/strapi-v4";
import { AuthPage, ThemedLayoutV2, RefineThemes } from "@refinedev/antd";
import routerProvider, {
  CatchAllNavigate,
  NavigateToResource,
} from "@refinedev/react-router-v6";
import { ConfigProvider } from "antd";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { auth } from '@refinedev/core';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import './App.css'
import Register from './Pages/Register/Register';
// import AuthProvide from './Components/AuthProvider';
import TopSaver from './Pages/TopSaver';
import Chat from './Pages/Chat';
import AuthProvider from './Components/AuthProvider';
import Referral from './Pages/Referral';
import MyCoins from './Pages/MyCoins';
import Settings from './Pages/Settings';
import AuthCallBack from './AuthCallBack';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Refine
        dataProvider={DataProvider("https://api.moviemads.com")}
        routerProvider={routerProvider}
        authProvider={AuthProvider}
        resources={[
          {
            name:'home',
            list:'/',
          },
          {
            name:'topSaver',
            list:'/topSaver',
          }
        ]}
      >
        <Routes>
          <Route
            element={
              <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                  <Outlet />
              </Authenticated>
            }
          >
{/*             
            <Route path="/topSaver" element={<TopSaver type='Page' />} />
            <Route path="/chat" element={<Chat type='Page' />} />
            <Route path="/referral" element={<Referral type='Page' />} />
            <Route path="/myCoin" element={<MyCoins type='Page' />} />
            <Route path="/Settings" element={<Settings type='Page' />} /> */}
  
          </Route>

          <Route
            element={
              <Authenticated fallback={<Outlet />}>
                <NavigateToResource />
              </Authenticated>
            }
          >
            <Route path="/login" element={<Login type="login" />} />
            <Route path="/register" element={<Register type="register" />} />
            <Route path="/auth/keycloak/callback" element={<AuthCallBack />} />
            <Route path='/' element={<Home />} />
            <Route path="/topSaver" element={<TopSaver type='Page' />} />
            <Route path="/chat" element={<Chat type='Page' />} />
            <Route path="/referral" element={<Referral type='Page' />} />
            <Route path="/myCoin" element={<MyCoins type='Page' />} />
            <Route path="/Settings" element={<Settings type='Page' />} />
          </Route>
        </Routes>
      </Refine>
      </QueryClientProvider>
  </BrowserRouter>
  );
}

export default App;
