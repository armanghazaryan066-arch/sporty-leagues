import React from 'react';
import { Card, Image, Typography } from 'antd';

import FallbackBadge from './FallbackBadge';

const { Title } = Typography;

interface BadgeCardProps {
  season: string;
  badgeUrl?: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({ 
  season, 
  badgeUrl, 
}) => {
  return (
    <Card
      hoverable
      className='badge-card'
    >
      <div className="badge-card-content">
        <Title level={5} className="badge-card-title">
          {season}
        </Title>
        
        <div className="badge-container">
          {badgeUrl ? (
            <Image
              src={badgeUrl}
              alt={`${season} badge`}
              width={80}
              height={80}
              className="badge-image"
              preview={{
                mask: <div className="badge-preview-mask"/>
              }}
            />
          ) : (
            <FallbackBadge />
          )}
        </div>
      </div>
    </Card>
  );
};

export default BadgeCard; 