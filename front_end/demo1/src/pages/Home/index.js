import { Breadcrumb, Layout, Menu, theme, DatePicker, Flex, Space,  } from 'antd';
import {PersonSelect} from '@/pages/Home/components/PersonSelect'
import { SearchInput } from './components/SearchInput';
import Column from 'antd/es/table/Column';
import { ContentContainer } from './components/ContentContainer';
import { SearchButton } from './components/SearchButton';

const Home = () => {
    const { RangePicker } = DatePicker;
    return (<div style={{
    }}>
    <Space direction="vertical" size='middle' style={{
        width:'100%'
    }}>
        <div style={{
            display:"flex",
            alignItems:"center"
        }}>
            <span style={{
                    marginRight:"20px",
                }}>输入关键字</span>
            <SearchInput />
        </div>
        <div  style={{
        }}>
            <span style={{
                marginRight:"20px"
            }}>选择时间范围</span>
            <RangePicker />
        </div>
        <div style={{
        }}>
            <span style={{
                marginRight:"20px"
            }}>选择参与者</span>
            <PersonSelect/>
            <span style={{
                marginLeft:"20px"
            }}><SearchButton /></span>
        </div> 
        <div>
            <ContentContainer/>
        </div>
    </Space>
    
  </div>)
  }
  export default Home