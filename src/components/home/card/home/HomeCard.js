import "./HomeCard.css";

const HomeCard = ({
  title = "NO TITLE",
  author = "No Author",
  imgSrc = "https://placehold.it/200x200",
  onClick = () => {},
}) => {
  return (
    <div onClick={(e) => onClick()} className="card">
      <div className="homecard-img">
        <img className="" src={imgSrc} alt="Card Image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">Author: {author}</p>
      </div>
    </div>
  );
};

export default HomeCard;
