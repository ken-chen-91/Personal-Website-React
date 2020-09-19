import Header_custom from "../../components/theme/Header";
import Banner from "../../components/theme/Banner";
import Skills from "../../components/theme/Skills";
import Head from  'next/head'
import {Row, Col} from 'antd'


import "./styles/index.css";
import "./styles/font.css";
import "./styles/layout.css";

const HomePage = () => {
  return (
    <div className="container">
      <Head >
          <title>Ken | Hello world!</title>
        </Head>

      <div className="head">
        <Header_custom />
        </div>

        <Row  xs={24} sm={24} md={16} lg={18} xl={14}>
        <div className="main">
          <Banner />
        </div>
        </Row>
        <div className="layout-skills">
        <Skills />
        </div>
        <div className="main">

        </div>

        <div className="footer">

        </div>
      
    </div>
  );
};

export default HomePage;
