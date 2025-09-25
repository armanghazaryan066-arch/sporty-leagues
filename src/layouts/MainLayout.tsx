import React from 'react';
import { Layout, Typography } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Footer } = Layout;
const { Title } = Typography;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Layout className="main-layout">
      <Header className="main-header">
        <div className="header-brand badge-page-container" onClick={() => navigate('/')}>
          <TrophyOutlined className="header-icon" />
          <Title level={3} className="header-title">
            Sporty Leagues
          </Title>
        </div>
      </Header>
      
      {children}
      
      <Footer className="main-footer">
        <Typography.Text type="secondary">
          Sporty Leagues ©2025
        </Typography.Text>
      </Footer>
    </Layout>
  );
};

export default MainLayout; 