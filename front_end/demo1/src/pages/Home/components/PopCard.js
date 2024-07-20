import React from 'react';
import { Button, Popover } from 'antd';
import { EmailTimeLine } from '@/pages/Detail/components/EmailTimeLine';
const content = (
  <div>
    <EmailTimeLine/>
  </div>
);
const PopCard = () => (
  <Popover content={content} title="Context">
    <Button >Hover me</Button>
  </Popover>
);
export {PopCard};