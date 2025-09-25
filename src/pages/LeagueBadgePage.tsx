import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Typography, 
  Spin, 
  Alert, 
  Row, 
  Col, 
  Breadcrumb,
  Empty
} from 'antd';
import { HomeOutlined, TrophyOutlined } from '@ant-design/icons';

import { useLeagueSeasons } from '../hooks';
import { BadgeCard } from '../components';
import { Season } from '../types';

const { Title } = Typography;

const LeagueBadgePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    seasons,
    isLoading,
    error,
  } = useLeagueSeasons(id!);

  const handleGoBack = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error Loading League Badges"
        description={error instanceof Error ? error?.message : 'Failed to load league badges'}
        type="error"
        showIcon
      />
    );
  }


  return (
    <div className="badge-page-container">
      <div className="badge-page-content">
        <div>
          <Breadcrumb 
            className="badge-breadcrumb"
            items={[
              {
                title: (
                  <span className="breadcrumb-item">
                    <HomeOutlined />
                    <span 
                      onClick={handleGoBack} 
                      className="breadcrumb-link"
                    >
                      Leagues
                    </span>
                  </span>
                ),
              },
              {
                title: (
                  <span className="breadcrumb-item">
                    <TrophyOutlined />
                    League Seasonal Badges
                  </span>
                ),
              },
            ]}
          />
        </div>

        <Title level={2} className="page-header">
          League Seasonal Badges
        </Title>

            {seasons.length === 0 ? (
              <Empty
                description="No seasonal badges found for this league"
                className="empty-state"
              />
            ) : (
              <Row gutter={[24, 24]}>
              {seasons.map((season: Season, index: number) => (
                <Col
                  key={index}
                  xs={12}
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                >
                  <BadgeCard
                    season={season.strSeason}
                    badgeUrl={season.strBadge}
                  />
                </Col>
              ))}
            </Row>
            )}
      </div>
    </div>
  );
};

export default LeagueBadgePage; 