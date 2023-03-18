import "./Error.css";

const Error = ({ show = false, message = "An error has ocurred!" }) => {
  return <>{show ? <div className="error-main">{message}</div> : null}</>;
};

export default Error;
