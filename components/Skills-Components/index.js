import { Row, Col, Card } from "antd";
import { tuple } from "antd/lib/_util/type";
import "./index.css";

const Skill = () => {
  return (
    <div className="skill-container">
      <Row justify="center">
        <Col>
          <h2>
            <span className="skill-title">Skills</span>
          </h2>
        </Col>
      </Row>
      <Row justify="space-around">
        <Col span={6} className="skill-card">
          <img src="/static/skills/coder.svg"></img>
          <span   className="skill-font">Web Developer</span>
        </Col>
        <Col span={6} className="skill-card">
          <img src="/static/skills/designer.svg"></img>
          <span  className="skill-font">UI / UX Design</span>
        </Col>
      </Row>
    </div>
  );
};

export default Skill;

{
  /* <Row >
        <Row>
          <h2>
            <span className="skill-title">Skills</span>
          </h2>
        </Row>
        <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
      </Row> */
}
