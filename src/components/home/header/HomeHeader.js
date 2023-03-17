import "./HomeHeader.css";

const Homeheader = ({ text = "-", value = "", onChange = () => {} }) => {
  return (
    <div className="homeheader-main">
      <span className="homeheader-text">{text}</span>
      <input
        className="homeheader-input"
        placeholder="Filter podcasts..."
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Homeheader;
