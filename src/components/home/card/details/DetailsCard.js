import "./DetailsCard.css";

const DetailsCard = ({
  imgSrc = "https://placehold.it/200x200",
  title = "",
  subtitle = "",
  description = "",
}) => {
  return (
    <div className="detailscard">
      <div className="detailscardimg">
        <img src={imgSrc} alt="Example Image" />
      </div>
      <div className="detailscard-content">
        <div className="detailscard-title">{title}</div>
        <div className="detailscard-subtitle">By {subtitle}</div>
        <div className="detailscard-description-title">Description:</div>
        <div className="detailscard-description">{description}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
