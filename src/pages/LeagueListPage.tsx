import React, { useState, useMemo } from 'react';
import { Row, Col, Typography, Spin, Alert, Empty } from 'antd';

import { League } from '../types';
import { useLeagues } from '../hooks';
import { SearchBar, SportFilter, LeagueCard } from '../components';

const { Title } = Typography;

const LeagueListPage: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const { leagues, isLoading, error } = useLeagues();

  const uniqueSports = useMemo(() => {
    if (!leagues.length) return [];
    const sports = leagues.map((league: League) => league.strSport);
    return [...new Set(sports)];
  }, [leagues]);

  const filteredLeagues = useMemo(() => {
    return leagues.filter((league: League) => {
      const matchesSearch = !searchText || 
        league.strLeague.toLowerCase().includes(searchText.toLowerCase()) ||
        league.strLeagueAlternate.toLowerCase().includes(searchText.toLowerCase());
      
      const matchesSport = !selectedSport || league.strSport === selectedSport;
      
      return matchesSearch && matchesSport;
    });
  }, [leagues, searchText, selectedSport]);

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
        message="Error Loading Leagues"
        description={error instanceof Error ? error?.message : 'Failed to load leagues'}
        type="error"
        showIcon
      />
    );
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <div>
          <Title level={2} className="page-header">
            Sports Leagues
          </Title>
          <Typography.Text className="page-description">
            Discover leagues from around the world. Click on any league to view its seasonal badges.
          </Typography.Text>
        </div>

        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={24} md={16} lg={18}>
            <SearchBar
              value={searchText}
              onChange={setSearchText}
              placeholder="Search leagues by name..."
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={6}>
            <SportFilter
              value={selectedSport}
              onChange={setSelectedSport}
              options={uniqueSports}
            />
          </Col>
        </Row>

        {filteredLeagues.length === 0 ? (
          <Empty
            description="No leagues found matching your criteria"
            className="empty-state"
          />
        ) : (
          <Row gutter={[16, 16]}>
            {filteredLeagues.map((league: League) => (
              <Col
                key={league.idLeague}
                xs={12}
                sm={12}
                md={8}
                lg={6}
                xl={4}
              >
                <LeagueCard league={league} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default LeagueListPage; 