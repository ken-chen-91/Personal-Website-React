import { Button, Space, } from "antd";
import {HomeOutlined, UserOutlined, ProfileOutlined, PhoneOutlined} from '@ant-design/icons'
import './index.css'
const MenuNav = () => {


  return (
    <div className="menuNav-container">
        <div >
          <Space size="large"> 
                <Button type="primary" shape="round" size="large" className="button-custom" key="1"><HomeOutlined />Home</Button>
                <Button shape="round" size="large" className="button-custom" key="2"><UserOutlined />About</Button>
                <Button shape="round" size="large" className="button-custom" key="4"><ProfileOutlined />Blog</Button>
                <Button shape="round" size="large" className="button-custom" key="5"><PhoneOutlined />Contact</Button>
                {/* <Button shape="round" size="large" className="button-custom" key="6">Talks</Button> */}
          </Space>
          
            
        </div>
          
    </div>
  );
};

export default MenuNav;
