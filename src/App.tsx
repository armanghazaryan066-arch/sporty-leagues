import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';

import { MainLayout } from './layouts';
import { LeagueListPage, LeagueBadgePage } from './pages';
import './App.css';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <MainLayout>
      <Content className="main-content">
        <Routes>
          <Route path="/" element={<LeagueListPage />} />
          <Route path="/league/:id" element={<LeagueBadgePage />} />
        </Routes>
      </Content>
    </MainLayout>
  );
};

export default App;
