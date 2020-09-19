import Author from "../../Header-Components/Author&Logo";
import { Affix, Row, Col, Divider } from "antd";
import "./index.css";
import MenuNav from "../../Header-Components/MenuNav";
import Line from "../../Header-Components/Line";

const Header = () => {
  return (

      <div className="header-container">
        <Affix>
          <Row className="header" justify="center">
            
            <Col  className="header-left" span={12} xs={24} sm={24} md={16} lg={18} xl={14}>
              <Author />
            </Col>
            <Row  align="middle">
              <Col  className="header-right" span={12} xs={24} sm={24} md={16} lg={18} xl={14}>
                <MenuNav />
              </Col>
            </Row>
          </Row>
          <Line />
        </Affix>
      </div>

  );
};

export default Header;
