import "./DetailsCard.css";

const styleHover = { ":hover": { color: "red" } };

const DetailsCard = ({
  imgSrc = "https://placehold.it/200x200",
  title = "",
  subtitle = "",
  description = "",
  onClick,
}) => {
  const handleClick = (e) => {
    if (onClick) onClick();
  };
  return (
    <div className="detailscard">
      <div
        className={`detailscardimg ${!!onClick ? "detailscard-mouse" : ""}`}
        onClick={handleClick}
      >
        <img src={imgSrc} alt="Example Image" />
      </div>
      <div className="detailscard-content">
        <div
          className={`detailscard-title ${
            !!onClick ? "detailscard-mouse" : ""
          }`}
          onClick={handleClick}
        >
          {title}
        </div>
        <div
          className={`detailscard-subtitle ${
            !!onClick ? "detailscard-mouse" : ""
          }`}
          onClick={handleClick}
        >
          By {subtitle}
        </div>
        <div className="detailscard-description-title">Description:</div>
        <div className="detailscard-description">{description}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
