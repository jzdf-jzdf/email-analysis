import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchInput = () => (
  <Space direction="vertical" style={{
    width:'80%'
  }}>
    <Input
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        allowClear>
    </Input>
      
  </Space>
);
export  {SearchInput};