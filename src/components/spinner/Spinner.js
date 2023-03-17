import "./Spinner.css";
const Spinner = ({ show = false }) => {
  return <>{show ? <div class="spinner"></div> : null}</>;
};

export default Spinner;
