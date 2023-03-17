import "./MainBar.css";
const MainBar = ({ text, actions }) => {
  return (
    <div className="mainbar-main">
      <div>{text}</div>
      <div>{actions}</div>
    </div>
  );
};

export default MainBar;
