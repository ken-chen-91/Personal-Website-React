import Header_custom from "../../components/theme/Header";
import Banner from "../../components/theme/Banner";
import Skills from "../../components/theme/Skills";
import Head from "next/head";

import { Row, Col } from "antd";

import "./styles/index.css";
import "./styles/font.css";
import "./styles/layout.css";
import FeaturedWork from "../../components/theme/Featured";

const HomePage = () => {
  return (
    <div className="container">
      <Head>
        <title>Ken | Hello world!</title>
      </Head>

{/* Header */}
      <div className="head">
        <Header_custom />
      </div>

{/* Banner */}
      <Row xs={24} sm={24} md={16} lg={18} xl={14}>
        <div className="main">
          <Banner />
        </div>
      </Row>

{/* Skills */}
      <div className="layout-skills">
        <Skills />
      </div>

{/* Featured work */}
      <div className="main">
      <FeaturedWork />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default HomePage;
