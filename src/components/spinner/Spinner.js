import "./Spinner.css";
const Spinner = ({ show = false }) => {
  return <>{show ? <div className="spinner"></div> : null}</>;
};

export default Spinner;
