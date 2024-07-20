import React from 'react';
import { Space, Table, Tag } from 'antd';


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key:'id',

  },
  {
    title: 'Sender',
    dataIndex: 'sender',
    key: 'sender',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Receiver',
    dataIndex: 'receiver',
    key: 'receiver',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'content',
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
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    sender: 'John Brown',
    receiver: 'John Brown',
    content: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    id:'1'
  },
  {
    key: '2',
    sender: 'Jim Green',
    receiver: 'John Brown',
    content: 'London No. 1 Lake Park',
    tags: ['loser'],
    id:'2'
  },
  {
    key: '3',
    sender: 'Joe Black',
    receiver: 'John Brown',
    content: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    id:'3'
  },
  {
    key: '1',
    sender: 'John Brown',
    receiver: 'John Brown',
    content: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    id:'4'
  },
  {
    key: '2',
    sender: 'Jim Green',
    receiver: 'John Brown',
    content: 'London No. 1 Lake Park',
    tags: ['loser'],
    id:'5'
  },
  {
    key: '3',
    sender: 'Joe Black',
    receiver: 'John Brown',
    content: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    id:'6'
  },
  
];
const MailContent = () => <Table columns={columns} dataSource={data} />;
export {MailContent};