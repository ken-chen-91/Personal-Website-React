import Texty from "rc-texty";
import "./index.css";

const Author = () => {
  return (
    <div className="author_container">
      
      <svg className="logo" viewBox="0 0 60 60"  >
        <path
          fill="none"
          stroke="#212121"
          strokeWidth="2"
          d="M52.3 14.8a27 27 0 0 1-37.4 38.1L36 38.6m16.3-23.8L7.8 45.3A27 27 0 0 1 42.4 5.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></path>
      </svg>
      <Texty className="author" mode="smooth">
    Ken_Chen
      </Texty>

      
      
    </div>
  );
};

export default Author;
