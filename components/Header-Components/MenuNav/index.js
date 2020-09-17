import { Button, Space, } from "antd";
import './index.css'
const MenuNav = () => {


  return (
    <div className="menuNav-container">
        <div >
          <Space size="large"> 
                <Button size="large" className="button-custom" key="1">Home</Button>
                <Button size="large" className="button-custom" key="2">About</Button>
                <Button size="large" className="button-custom" key="4">Blog</Button>
                <Button size="large" className="button-custom" key="5">Talks</Button>
                <Button size="large" className="button-custom" key="6">Contact</Button>
          </Space>
          
            
        </div>
          
    </div>
  );
};

export default MenuNav;
