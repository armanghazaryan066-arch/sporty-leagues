import React from 'react';

const FallbackBadge: React.FC = () => {
  return (
    <svg
      width={80}
      height={80}
      viewBox="0 0 100 100"
      style={{ background: '#f5f5f5', borderRadius: '8px' }}
    >
      <circle
        cx="50"
        cy="50"
        r="35"
        fill="#1890ff"
        opacity="0.1"
      />
      <circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="#1890ff"
        strokeWidth="2"
      />
    </svg>
  );
};

export default FallbackBadge; 