import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useNavigate } from 'react-router-dom'
import { PopCard } from './PopCard';




const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key:'id',

  },
  {
    title: 'Topic',
    dataIndex: 'topic',
    key: 'topic',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Summary',
    dataIndex: 'summary',
    key: 'summary',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <PopCard/>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    topic: 'John Brown',
    summary: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    id:'1'
  },
  {
    key: '2',
    topic: 'Jim Green',
    summary: 'London No. 1 Lake Park',
    tags: ['loser'],
    id:'2'
  },
  {
    key: '3',
    topic: 'Joe Black',
    summary: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    id:'3'
  },
  {
    key: '1',
    topic: 'John Brown',
    summary: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    id:'4'
  },
  {
    key: '2',
    topic: 'Jim Green',
    summary: 'London No. 1 Lake Park',
    tags: ['loser'],
    id:'5'
  },
  {
    key: '3',
    topic: 'Joe Black',
    summary: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    id:'6'
  },
  
];
const ContentContainer = () => <Table columns={columns} dataSource={data} />;
export {ContentContainer};