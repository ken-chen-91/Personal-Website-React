import Header from "../../components/theme/Header";
import Banner from '../../components/theme/Banner'

import "./styles/index.css";
import "./styles/font.css";
import "./styles/layout.css";

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
    </div>
  );
};

export default HomePage;
