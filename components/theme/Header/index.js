import Author from "../../Header-Components/Author&Logo";
import { Affix, Row, Col, Divider } from "antd";
import "./index.css";
import MenuNav from "../../Header-Components/MenuNav";
import Line from "../../Header-Components/Line";

const Header = () => {
  return (
    <>
      <div className="header_outside_container">
        <Affix>
          <Row className="header" justify="center">
            
            <Col className="header-left" span={12} xs={2} sm={4} md={6} lg={8} xl={10}>
              <Author />
            </Col>
            <Row justify="space-around" align="middle">
              <Col span={12} xs={20} sm={16} md={12} lg={8} xl={4} pull={7}>
                <MenuNav />
              </Col>
            </Row>
          </Row>
          <Line />
        </Affix>
      </div>
    </>
  );
};

export default Header;
