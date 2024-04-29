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
function App() {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={DataProvider("https://api.moviemads.com")}
        routerProvider={routerProvider}
        // authProvider={AuthProvide}
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
            <Route index element={<Home />} />
            <Route path="/topSaver" element={<TopSaver type='Page' />} />
            <Route path="/chat" element={<Chat type='Page' />} />
          </Route>


          <Route
            element={
              <Authenticated fallback={<Outlet />}>
                <NavigateToResource />
              </Authenticated>
            }
          >
            <Route path="/login" element={<Login type="login" />} />
          </Route>
        </Routes>
      </Refine>
  </BrowserRouter>
  );
}

export default App;
