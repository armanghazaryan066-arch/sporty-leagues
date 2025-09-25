import React from 'react';
import { Card, Typography, Tag } from 'antd';
import { TrophyOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { League } from '../types';

const { Text, Title } = Typography;

interface LeagueCardProps {
  league: League;
}

const LeagueCard: React.FC<LeagueCardProps> = ({ league }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/league/${league.idLeague}`);
  };

  return (
    <Card
      hoverable
      onClick={handleClick}
      className="league-card"
    >
      <div className="league-card-content">
        <div className="league-card-header">
          <TrophyOutlined className="league-card-icon" />
          <Tag color="blue" className="league-card-tag">
            {league.strSport}
          </Tag>
        </div>
        
        <Title 
          level={4} 
          className="league-card-title"
          ellipsis={{ rows: 2, tooltip: league.strLeague }}
        >
          {league.strLeague}
        </Title>
        
        {league.strLeagueAlternate && (
          <Text 
            type="secondary" 
            className="league-card-subtitle"
            ellipsis={{ tooltip: league.strLeagueAlternate }}
          >
            {league.strLeagueAlternate}
          </Text>
        )}
      </div>
    </Card>
  );
};

export default LeagueCard; 