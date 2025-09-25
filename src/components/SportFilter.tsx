import React from 'react';
import { Select } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const { Option } = Select;

interface SportFilterProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const SportFilter: React.FC<SportFilterProps> = ({ 
  value, 
  onChange, 
  options 
}) => {
  return (
    <Select
      value={value || undefined}
      onChange={onChange}
      placeholder="Filter by sport"
      size="large"
      allowClear
      className="full-width"
      suffixIcon={<FilterOutlined />}
      aria-label="Filter leagues by sport"
    >
      {options.map((sport) => (
        <Option key={sport} value={sport}>
          {sport}
        </Option>
      ))}
    </Select>
  );
};

export default SportFilter; 