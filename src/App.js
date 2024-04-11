import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/Component';

const MainLayout = loadable(() => import(' ./layouts/MainLayout'));
const NotFound = loadable(() => import(' ./commons/pages/NotFound'));

/* 회원 페이지 S */
const Join = loadable(() => import('./member/pages/Join'));
const Login = loadable(() => import('./member/pages/Login'));
const Main = loadable(() => import('./main/pages/Main')); // 메인페이지
/* 회원 페이지 E */
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} /> {/* 메인 페이지 S */}
        {/* 회원 페이지 S */}
        <Route path="member">
          <Route path="join" element={<Join />} />
          <Route path="Login" element={<Login />} />
        </Route>
        {/* 회원 페이지 E */}
        <Route path="*" element={<NotFound />} /> {/* 없는 페이지  */}
      </Route>
    </Routes>
  );
};

export default React.memo(App);
