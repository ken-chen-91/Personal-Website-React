import { Row, Col, Card } from "antd";
import "./index.css";
const { Meta } = Card;

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
        <Col span={4} >
          <Card className="skill-card "  hoverable="true" bordered={false}>
            <img className="card1" src="/static/skills/coder.svg"></img>
            <span className="skill-font">Web Developer</span>
          </Card>
        </Col>
        
        <Col span={4} className="skill-card ">
          <Card  className="skill-card " hoverable="true" bordered={false} >
            <img className="card2" src="/static/skills/designer.svg"></img>
            <span className="skill-font">UI / UX Design</span>
            
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <a className="skill-question">See the tech tools I use?</a>
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
