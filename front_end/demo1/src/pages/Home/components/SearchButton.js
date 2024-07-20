import React, { useState } from 'react';
import { SearchOutlined  } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
const SearchButton = () => {
  const [size, setSize] = useState('large'); // default is 'middle'
  return (
    <>
      <Button type="primary" shape="round" icon={<SearchOutlined />} size={size}>
            Search
          </Button>
    </>
  );
};
export  {SearchButton};