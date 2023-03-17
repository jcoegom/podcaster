import "./MainBar.css";
const MainBar = ({ title, actions }) => {
  return (
    <div className="mainbar-main">
      <div className="mainbar-title">{title}</div>
      <div className="mainbar-actions">{actions}</div>
    </div>
  );
};

export default MainBar;
