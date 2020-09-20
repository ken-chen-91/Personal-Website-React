import { Col, Row, Card, Button } from "antd";

import { AlignRightOutlined } from '@ant-design/icons';

import './index.css'
const { Meta } = Card;

const Featured = () => {
  return (
    <>
      <div>
        <Row>
          <Col>
            <h2>Featured work</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>Side Projects</h6>
          </Col>
        </Row>
        <Row justify="space-around">
          <Col>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://smakosh.com/static/0ce58b9e51e292f0a74da5d10266808e/57090/ontwik.png"
                />
              }
            ></Card>
          </Col>
          <Col>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://smakosh.com/static/06b4e5e902bcd229849907bdc83c024a/30037/aihashtags.jpg"
                />
              }
            ></Card>
          </Col>
          <Col>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://smakosh.com/static/2a6a2fe9035f56572ff11a4368086561/30037/catchit.jpg"
                />
              }
            ></Card>
          </Col>
          
        </Row>
        <Row justify="center" className="featured-button">
          <Col><Button shape="round" type="primary"><span>See More</span><AlignRightOutlined/></Button></Col>
        </Row>
      </div>
    </>
  );
};

export default Featured;
