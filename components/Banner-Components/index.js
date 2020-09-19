import "./index.css";
import { Row, Col, Button } from "antd";
import Texty from "rc-texty";

const Intro = () => {
  return (
    <Row className="intro">
      <Row>
        <h1>
          <Texty mode="smooth" >I'm Ken</Texty>
        </h1>
      </Row>
      <Row>
        <Col type="flex" justify="center">
          <Row xs={24} sm={24} md={16} lg={18} xl={14}>
            <p className="description">
              <Texty mode="smooth"> Also known as</Texty>
              <span className="banner-name">
                <Texty mode="smooth">HuiNeng Chen</Texty>
              </span>
              <Texty mode="smooth">, a self-taught Web Developer and UI/UX Designer.</Texty>
            </p>
            <p className="description">
              <Texty mode="smooth">
                I help founders add value to society by crafting software using
                JavaScript tools, I love open source and building side projects.
              </Texty>
            </p>
          </Row>
        </Col>
      </Row>
      <Row gutter={14}>
        <Col>
          <button size="large" className="banner-custom banner-button1">
            <span className="banner-span1">View resume</span>
          </button>
        </Col>
        <Col>
          <button size="large" className="banner-custom banner-button2">
            <span className="banner-span2">Get In Touch</span>
          </button>
        </Col>
      </Row>
    </Row>
  );
};

export default Intro;
