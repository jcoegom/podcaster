import { navigate } from "@reach/router";

import "./MainBar.css";
const MainBar = ({
  title,
  actions,
  onClick = () => {
    navigate("/");
  },
}) => {
  return (
    <div className="mainbar-main">
      <div onClick={(e) => onClick()} className="mainbar-title">
        {title}
      </div>
      <div className="mainbar-actions">{actions}</div>
    </div>
  );
};

export default MainBar;
